package me.ivanyu.jmxviewer;

import com.googlecode.lanterna.gui2.MultiWindowTextGUI;
import com.googlecode.lanterna.gui2.Window;
import com.googlecode.lanterna.input.KeyStroke;
import com.googlecode.lanterna.input.KeyType;
import com.googlecode.lanterna.screen.Screen;

import javax.management.MBeanServerConnection;

final class GUI extends MultiWindowTextGUI {
    private final int pid;
    private final String vmDisplayName;
    private final MBeanServerConnection conn;

    GUI(final Screen screen, final int pid, final String vmDisplayName,
        final MBeanServerConnection conn) {
        super(screen);
        this.pid = pid;
        this.vmDisplayName = vmDisplayName;
        this.conn = conn;
    }

    final void start() {
        final MainWindow mainWindow = new MainWindow(
                pid, vmDisplayName, new MbeanTreeBuilder(conn),
                new MbeanAttributeTableBuilder(conn)
        );
        addWindowAndWait(mainWindow);
    }

    @Override
    public synchronized boolean handleInput(final KeyStroke keyStroke) {
        if (keyStroke.getKeyType() == KeyType.Character && keyStroke.getCharacter() == 'q') {
            Window activeWindow = this.getActiveWindow();
            while (activeWindow != null) {
                activeWindow.close();
                activeWindow = this.getActiveWindow();
            }
        }
        return super.handleInput(keyStroke);
    }
}
