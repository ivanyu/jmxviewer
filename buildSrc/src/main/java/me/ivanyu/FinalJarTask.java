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
package me.ivanyu;

import org.gradle.api.DefaultTask;
import org.gradle.api.internal.tasks.DefaultTaskOutputs;
import org.gradle.api.tasks.TaskAction;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;
import java.util.zip.ZipOutputStream;

public class FinalJarTask extends DefaultTask {
    private final static List<String> PREFIXES_TO_SKIP = List.of(
            // Exclude Lanterna translations.
            "multilang/",

            // Exclude everything HTTP- and standalone-related from Jolokia.
            "org/jolokia/backend/",
            "org/jolokia/config/",
            "org/jolokia/detector/",
            "META-INF/detectors-default",
            "org/jolokia/discovery/",
            "org/jolokia/handler/",
            "org/jolokia/history/",
            "org/jolokia/http/",
            "org/jolokia/request/",
            "org/jolokia/restrictor/",

            // Exclude certain Jolokia utility classes.
            "org/jolokia/util/Base64Util.class",
            "org/jolokia/util/DebugStore",
            "org/jolokia/util/IoUtil.class",
            "org/jolokia/util/IpChecker.class",
            "org/jolokia/util/JmxUtil.class",
            "org/jolokia/util/JolokiaCipher",
            "org/jolokia/util/JulLogHandler.class",
            "org/jolokia/util/LogHandler$StdoutLogHandler.class",
            "org/jolokia/util/LogHandler.class",
            "org/jolokia/util/MimeTypeUtil.class",
            "org/jolokia/util/NetworkUtil.class",
            "org/jolokia/util/QuietLogHandler.class",
            "org/jolokia/util/RequestType.class",
            "org/jolokia/util/ServersInfo.class",
            "org/jolokia/util/UserPasswordCallbackHandler.class"
    );

    private File inputFile = null;

    public final FinalJarTask from(DefaultTaskOutputs... sourcePaths) {
        inputFile = sourcePaths[0].getFiles().getSingleFile();
        return this;
    }

    @TaskAction
    public void run() throws IOException {
        try (final var os = new FileOutputStream("build/jmxviewer.jar");
             final ZipOutputStream zipOs = new ZipOutputStream(os)) {
            final ZipFile inputFile = new ZipFile(this.inputFile);
            final var entries = inputFile.entries();

            entriesloop:
            while (entries.hasMoreElements()) {
                final ZipEntry entry = entries.nextElement();
                final String name = entry.getName();

                for (final String p : PREFIXES_TO_SKIP) {
                    if (name.startsWith(p)) {
                        continue entriesloop;
                    }
                }

                if (name.endsWith("-theme.properties") && !name.equals("default-theme.properties")) {
                    continue;
                }

                zipOs.putNextEntry(entry);
                inputFile.getInputStream(entry).transferTo(zipOs);
                zipOs.closeEntry();
            }
        }
    }
}
