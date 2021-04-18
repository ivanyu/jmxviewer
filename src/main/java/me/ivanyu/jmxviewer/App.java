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

import com.caoccao.javet.exceptions.JavetException;
import com.caoccao.javet.interop.NodeRuntime;
import com.caoccao.javet.interop.V8Host;
import com.caoccao.javet.node.modules.NodeModuleModule;
import com.caoccao.javet.utils.JavetCallbackContext;
import com.sun.tools.attach.AttachNotSupportedException;
import com.sun.tools.attach.VirtualMachine;
import com.sun.tools.attach.VirtualMachineDescriptor;
import sun.tools.attach.HotSpotVirtualMachine;

import javax.management.MBeanServerConnection;
import javax.management.remote.JMXConnector;
import javax.management.remote.JMXConnectorFactory;
import javax.management.remote.JMXServiceURL;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.util.*;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;

public class App {
    private static void printUsageAndExit() {
        System.err.println("Usage:");
        System.err.println("app <pid>");
        System.exit(5);
    }

    private static void errorAndExit(final String message) {
        System.out.println(message);
        System.exit(1);
    }

    public static void main(String[] args) throws IOException, AttachNotSupportedException, JavetException, URISyntaxException {
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

        final Properties props = vm.getAgentProperties();
        final String jmxUrl = props.getProperty("com.sun.management.jmxremote.localConnectorAddress");

        vm.detach();

        try (final JMXConnector jmxConnector = JMXConnectorFactory.newJMXConnector(new JMXServiceURL(jmxUrl), Map.of())) {
            jmxConnector.connect();
            final MBeanServerConnection conn = jmxConnector.getMBeanServerConnection();
            run(vmDescriptor.displayName(), conn);
        }
    }

    private static void run(final String vmDisplayName, final MBeanServerConnection conn) throws JavetException, IOException, URISyntaxException {
        final String jsRoot = prepareJS();

        final List<JavetCallbackContext> javetCallbackContexts = new ArrayList<>();
        final MbeansCallbacks mbeansCallbacks = new MbeansCallbacks(conn);

        try (final NodeRuntime nodeRuntime = V8Host.getNodeInstance().createV8Runtime()) {
            javetCallbackContexts.addAll(
                    nodeRuntime.getGlobalObject().setFunctions(mbeansCallbacks)
            );

            final File nodeModules = new File(jsRoot, "node_modules/");
            nodeRuntime.getNodeModule(NodeModuleModule.class).setRequireRootDirectory(nodeModules.toPath());

            nodeRuntime.getExecutor(new File(jsRoot, "index.js")).executeVoid();

            nodeRuntime.await();
            javetCallbackContexts.forEach(c -> nodeRuntime.removeCallbackContext(c.getHandle()));
        }
    }

    private static String prepareJS() throws IOException, URISyntaxException {
        final var sourceFile = App.class.getProtectionDomain()
                .getCodeSource()
                .getLocation();

        final boolean isJar = sourceFile.getFile().endsWith(".jar");
        if (isJar) {
            final var jsChecksum = new String(
                    Objects.requireNonNull(App.class.getResourceAsStream("/js/checksum.txt")).readAllBytes()
            );

            final String tmpPath = System.getProperty("java.io.tmpdir");
            final String userName = System.getProperty("user.name");
            final File tmpJsDir = new File(tmpPath, "jmxviewer-" + userName + "-" + jsChecksum);
            final File marker = new File(tmpJsDir, "MARKER");

            System.out.println("Extracting JS files into " + tmpJsDir);
            System.out.println("Exists: " + marker.exists());
            if (!marker.exists()) {
                deleteDir(tmpJsDir);
                extractJs(new File(sourceFile.getFile()), tmpJsDir);
                marker.createNewFile();
            }
            return new File(tmpJsDir, "js").toString();
        } else {
            return "js";
        }
    }

    private static void extractJs(final File file, File tmpJsDir) throws IOException {
        final ZipFile zipFile = new ZipFile(file);
        final Enumeration<? extends ZipEntry> entries = zipFile.entries();
        while (entries.hasMoreElements()) {
            final ZipEntry entry = entries.nextElement();
            if (!entry.isDirectory() && entry.getName().startsWith("js/")) {
                final File destFile = new File(tmpJsDir, entry.getName());
                destFile.getParentFile().mkdirs();
                try (final InputStream is = zipFile.getInputStream(entry)) {
                    Files.copy(is, destFile.toPath());
                }
            }
        }
    }

    private static void deleteDir(final File dir) {
        if (dir.exists()) {
            for (final File file : dir.listFiles()) {
                if (file.isDirectory()) {
                    deleteDir(file);
                } else {
                    file.delete();
                }
            }
            dir.delete();
        }
    }
}
