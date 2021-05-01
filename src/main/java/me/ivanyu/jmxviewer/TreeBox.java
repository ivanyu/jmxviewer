package me.ivanyu.jmxviewer;

import com.googlecode.lanterna.gui2.AbstractListBox;
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
