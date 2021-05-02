package me.ivanyu.jmxviewer;

import com.googlecode.lanterna.gui2.MultiWindowTextGUI;
import com.googlecode.lanterna.gui2.Window;
import com.googlecode.lanterna.input.KeyStroke;
import com.googlecode.lanterna.input.KeyType;
import com.googlecode.lanterna.screen.Screen;

final class GUI extends MultiWindowTextGUI {
    GUI(final Screen screen) {
        super(screen);
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
