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

import com.googlecode.lanterna.TerminalTextUtils;
import com.googlecode.lanterna.graphics.ThemeDefinition;
import com.googlecode.lanterna.gui2.AbstractListBox;
import com.googlecode.lanterna.gui2.TextGUIGraphics;
import com.googlecode.lanterna.input.KeyStroke;

import java.security.InvalidParameterException;
import java.util.ArrayList;
import java.util.List;

final class TreeBox<TN extends TreeNode<TN>> extends AbstractListBox<TN, TreeBox<TN>> {
    private final List<TN> rootNodes = new ArrayList<>();

    TreeBox() {
        this.setListItemRenderer(new ListItemRenderer<>() {
            @Override
            public String getLabel(final TreeBox listBox, final int index, final TreeNode item) {
                String prefix = "  ".repeat(item.depth());
                if (item.hasChildren()) {
                    if (item.isExpanded()) {
                        prefix += "▶ ";
                    } else {
                        prefix += "▼ ";
                    }
                } else {
                    prefix += "  ";
                }
                return prefix + item.label();
            }

            @Override
            public void drawItem(final TextGUIGraphics graphics, final TreeBox<TN> listBox, final int index, final TN item, final boolean selected, final boolean focused) {
                final ThemeDefinition themeDefinition = listBox.getTheme().getDefinition(AbstractListBox.class);
                // Here's the main difference to the standard renderer: we have three possible states and three styles.
                if (!selected) {
                    graphics.applyThemeStyle(themeDefinition.getNormal());
                } else if (focused) {
                    graphics.applyThemeStyle(themeDefinition.getActive());
                } else {
                    graphics.applyThemeStyle(themeDefinition.getSelected());
                }

                String label = getLabel(listBox, index, item);
                label = TerminalTextUtils.fitString(label, graphics.getSize().getColumns());
                while(TerminalTextUtils.getColumnWidth(label) < graphics.getSize().getColumns()) {
                    label += " ";
                }
                graphics.putString(0, 0, label);
            }
        });
    }

    @Override
    public synchronized Result handleKeyStroke(final KeyStroke keyStroke) {
        switch (keyStroke.getKeyType()) {
            case Enter:
                // Let the window handle it.
                return Result.UNHANDLED;

            case ArrowLeft:
                setNodeExpanded(getSelectedItem(), false);
                return Result.HANDLED;

            case ArrowRight:
                setNodeExpanded(getSelectedItem(), true);
                return Result.HANDLED;

            case ArrowDown: {  // override to prevent focus escape in original list
                final int currentIdx = getSelectedIndex();
                if (currentIdx < getItems().size() - 1) {
                    setSelectedIndex(currentIdx + 1);
                }
                return Result.HANDLED;
            }

            case ArrowUp: {  // override to prevent focus escape in original list
                final int currentIdx = getSelectedIndex();
                if (currentIdx > 0) {
                    setSelectedIndex(currentIdx - 1);
                }
                return Result.HANDLED;
            }

            case Character:
                if (keyStroke.getCharacter() == ' ') {
                    setNodeExpanded(getSelectedItem(), null);
                    return Result.HANDLED;
                }
        }

        return super.handleKeyStroke(keyStroke);
    }

    /**
     * @param targetState non-null to set to this state, null for toggling
     */
    private void setNodeExpanded(final TN node, final Boolean targetState) {
        if (!node.hasChildren()) {
            return;
        }

        if (!node.setExpanded(targetState)) {
            return;
        }

        final int prevSelectedIndex = getSelectedIndex();
        // TODO optimize: no need to rebuild the whole tree
        refreshItemList();
        setSelectedIndex(prevSelectedIndex);
    }

    synchronized void addRootNode(final TN root) {
        if (!root.isRoot()) {
            throw new InvalidParameterException("root node must not have parents");
        }
        this.rootNodes.add(root);
        this.addItem(root);
        refreshItemList();
    }

    private void refreshItemList() {
        this.clearItems();
        for (final TN rootNode : rootNodes) {
            addItemRecursively(rootNode);
        }
    }

    private void addItemRecursively(final TN node) {
        this.addItem(node);
        if (node.hasChildren() && node.isExpanded()) {
            for (final TN child : node.children()) {
                addItemRecursively(child);
            }
        }
    }
}
