package me.ivanyu.jmxviewer;

import java.util.ArrayList;
import java.util.List;

abstract class TreeNode<SELF extends TreeNode<SELF>> {
    private final String label;
    private final SELF parent;
    private final List<SELF> children = new ArrayList<>();
    private boolean expanded = false;

    TreeNode(final String label, final SELF parent) {
        this.label = label;
        this.parent = parent;
        if (parent != null) {
            parent.addChild((SELF) this);
        }
    }

    String label() {
        return label;
    }

    SELF parent() {
        return parent;
    }

    boolean isExpanded() {
        return expanded;
    }

    void addChild(final SELF treeNode) {
        children.add(treeNode);
    }

    boolean isRoot() {
        return this.parent == null;
    }

    int depth() {  // TODO optimize
        int depth = 0;
        SELF current = this.parent;
        while (current != null) {
            depth += 1;
            current = current.parent();
        }
        return depth;
    }

    List<SELF> children() {
        return List.copyOf(children);
    }

    boolean hasChildren() {
        return !children.isEmpty();
    }

    /**
     * @param targetState non-null to set to this state, null for toggling
     * @return whether the expanded state changed
     */
    boolean setExpanded(final Boolean targetState) {
        if (!hasChildren()) {
            throw new IllegalStateException("Must have children to change expanded state");
        }

        if (targetState == null) {
            this.expanded = !this.expanded;
            return true;
        }

        final boolean changed = this.expanded != targetState;
        this.expanded = targetState;
        return changed;
    }
}
