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

import com.googlecode.lanterna.gui2.ActionListBox;
import com.googlecode.lanterna.gui2.BasicWindow;
import com.googlecode.lanterna.gui2.Panel;
import com.sun.tools.attach.VirtualMachine;
import com.sun.tools.attach.VirtualMachineDescriptor;

import java.util.List;

final class ProcessSelectionWindow extends BasicWindow {
    VirtualMachineDescriptor selectedVM = null;

    ProcessSelectionWindow() {
        this.setHints(List.of(Hint.MODAL, Hint.CENTERED));
        this.setTitle("Select JVM process");

        final Panel contentPanel = new Panel();
        final ActionListBox listBox = new ActionListBox();
        contentPanel.addComponent(listBox);
        this.setComponent(contentPanel);

        for (final VirtualMachineDescriptor descriptor : VirtualMachine.list()) {
            final String label = descriptor.id() + " - " + descriptor.displayName();
            listBox.addItem(label, () -> {
                selectedVM = descriptor;
                close();
            });
        }
        listBox.takeFocus();
    }
}
