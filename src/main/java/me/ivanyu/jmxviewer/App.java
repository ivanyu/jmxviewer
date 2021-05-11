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

import com.googlecode.lanterna.graphics.AbstractTheme;
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

public final class App {
    private static void printUsageAndExit() {
        System.err.println("Usage:");
        System.err.println("app <pid>");
        System.exit(1);
    }

    private static void errorAndExit(final String message) {
        System.out.println(message);
        System.exit(1);
    }

    public static void main(final String[] args) throws IOException, AttachNotSupportedException {
        if (args.length != 1) {
            printUsageAndExit();
        }

        final int pid;
        try {
            pid = Integer.parseInt(args[0]);
        } catch (final NumberFormatException e) {
            printUsageAndExit();
            throw e;  // make the scope checker happy
        }

        VirtualMachineDescriptor vmDescriptor = null;
        for (final var d : VirtualMachine.list()) {
            if (d.id().equals(Integer.toString(pid))) {
                vmDescriptor = d;
                break;
            }
        }
        if (vmDescriptor == null) {
            errorAndExit("Unknown or inaccessible VM " + pid);
            throw new RuntimeException();  // will never be thrown, just to make the null checker happy
        }

        final VirtualMachine vm = VirtualMachine.attach(vmDescriptor);
        if (!(vm instanceof HotSpotVirtualMachine)) {
            errorAndExit("VM is not HotSpotVirtualMachine");
            throw new RuntimeException();  // will never be thrown, just to make the null checker happy
        }
        final HotSpotVirtualMachine hsvm = (HotSpotVirtualMachine) vm;
        hsvm.executeJCmd("ManagementAgent.start_local");

        final String vmDisplayName = vmDescriptor.displayName();

        final var jmxUrl = new JMXServiceURL(
                vm.getAgentProperties().getProperty("com.sun.management.jmxremote.localConnectorAddress"));
        vm.detach();

        try (final JMXConnector jmxConnector = JMXConnectorFactory.newJMXConnector(jmxUrl, Map.of())) {
            jmxConnector.connect();
            final MBeanServerConnection conn = jmxConnector.getMBeanServerConnection();
            startGui(pid, vmDisplayName, conn);
        }
    }

    private static void startGui(final int pid, final String vmDisplayName,
                                 final MBeanServerConnection conn) throws IOException {
        final var defaultTerminalFactory = new DefaultTerminalFactory();
        Screen screen = null;
        try {
            final var terminal = defaultTerminalFactory.createTerminal();
            screen = new TerminalScreen(terminal);
            screen.startScreen();
            terminal.setCursorVisible(false);

            final GUI gui = new GUI(screen, pid, vmDisplayName, conn);
//            gui.setTheme(LanternaThemes.getRegisteredTheme("businessmachine"));
//            gui.setTheme(LanternaThemes.getRegisteredTheme("blaster"));
            gui.setTheme(getTheme());

            gui.start();
        } finally {
            if (screen != null) {
                screen.clear();
                screen.close();
            }
        }
    }

    private static AbstractTheme getTheme() throws IOException {
        final var properties = new Properties();
        try (final InputStream is = App.class.getClassLoader()
                .getResourceAsStream("jmxviewer-theme.properties")) {
            properties.load(is);
        }
        return new PropertyTheme(properties);
    }
}
