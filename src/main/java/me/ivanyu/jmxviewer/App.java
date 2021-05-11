/*
 * Copyright 2021 Ivan Yurchenko
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package me.ivanyu.jmxviewer;

import com.googlecode.lanterna.graphics.PropertyTheme;
import com.googlecode.lanterna.screen.Screen;
import com.googlecode.lanterna.screen.TerminalScreen;
import com.googlecode.lanterna.terminal.DefaultTerminalFactory;
import com.sun.tools.attach.AttachNotSupportedException;
import com.sun.tools.attach.VirtualMachine;
import com.sun.tools.attach.VirtualMachineDescriptor;
import sun.tools.attach.HotSpotVirtualMachine;

import javax.management.MBeanServerConnection;
import javax.management.remote.JMXConnector;
import javax.management.remote.JMXConnectorFactory;
import javax.management.remote.JMXServiceURL;
import java.io.IOException;
import java.io.InputStream;
import java.util.Map;
import java.util.Properties;

public final class App implements AutoCloseable {
    private final String pid;

    private GUI gui;
    private Screen screen;

    private App(final String pid) {
        this.pid = pid;
    }

    void start() throws IOException, AttachNotSupportedException {
        startGUI();
        final VirtualMachineDescriptor vmDescriptor = getSelectedVM();

        final VirtualMachine vm = VirtualMachine.attach(vmDescriptor);
        if (!(vm instanceof HotSpotVirtualMachine)) {
            errorAndExit("VM is not HotSpotVirtualMachine");
            throw new RuntimeException();  // will never be thrown, just to make the null checker happy
        }
        final HotSpotVirtualMachine hsvm = (HotSpotVirtualMachine) vm;
        hsvm.executeJCmd("ManagementAgent.start_local");

        final var jmxUrl = new JMXServiceURL(
                vm.getAgentProperties().getProperty("com.sun.management.jmxremote.localConnectorAddress"));
        vm.detach();

        try (final JMXConnector jmxConnector = JMXConnectorFactory.newJMXConnector(jmxUrl, Map.of())) {
            jmxConnector.connect();
            final MBeanServerConnection conn = jmxConnector.getMBeanServerConnection();

            final MainWindow mainWindow = new MainWindow(
                    vmDescriptor, new MbeanTreeBuilder(conn),
                    new MbeanAttributeTableBuilder(conn)
            );
            gui.addWindowAndWait(mainWindow);
        }
    }

    private synchronized void startGUI() throws IOException {
        final var terminal = new DefaultTerminalFactory().createTerminal();
        screen = new TerminalScreen(terminal);
        screen.startScreen();
        terminal.setCursorVisible(false);

        this.gui = new GUI(screen);

        // Load the theme.
        final var properties = new Properties();
        try (final InputStream is = App.class.getClassLoader()
                .getResourceAsStream("default-theme.properties")) {
            properties.load(is);
        }
        this.gui.setTheme(new PropertyTheme(properties));
    }

    private VirtualMachineDescriptor getSelectedVM() {
        if (pid == null) {
            final ProcessSelectionWindow processSelectionWindow = new ProcessSelectionWindow();
            gui.addWindowAndWait(processSelectionWindow);
            return processSelectionWindow.selectedVM;
        } else {
            final var first = VirtualMachine.list().stream()
                    .filter(vm -> vm.id().equals(pid))
                    .findFirst();
            if (first.isPresent()) {
                return first.get();
            } else {
                errorAndExit("Unknown or inaccessible VM " + pid);
                throw new RuntimeException();  // will never be thrown, just to make the checker
            }
        }
    }

    private synchronized void closeScreen() {
        if (this.screen != null) {
            try {
                this.screen.close();
            } catch (final IOException e) {
                // It's OK to just print the stack trace here,
                // the app is being shut down at this point already.
                e.printStackTrace();
            }
            this.screen = null;
        }
    }

    @Override
    public void close() throws Exception {
        closeScreen();
    }

    private void errorAndExit(final String message) {
        closeScreen();
        System.err.println(message);
        System.exit(1);
    }

    public static void main(final String[] args) throws Exception {
        String pid = null;
        if (args.length == 0) {
            // keep null
        } else if (args.length == 1) {
            if (args[0].equals("-v")) {
                System.out.println("JMXViewer");
                System.out.println("Version " + Version.VERSION);
                System.exit(0);
            }

            pid = args[0];
        } else {
            System.err.println("Usage:");
            System.err.println("java -jar jmxviewer.jar [pid]");
            System.exit(1);
        }

        try (final App app = new App(pid)) {
            app.start();
        }
    }
}
