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
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;
import java.util.zip.ZipOutputStream;

public class FinalJarTask extends DefaultTask {
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
            while (entries.hasMoreElements()) {
                final ZipEntry entry = entries.nextElement();
                final String name = entry.getName();

                if (name.startsWith("multilang/")) {
                    continue;
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
