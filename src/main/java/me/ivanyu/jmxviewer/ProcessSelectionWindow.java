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
