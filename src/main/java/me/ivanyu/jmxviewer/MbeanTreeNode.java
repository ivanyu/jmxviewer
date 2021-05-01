package me.ivanyu.jmxviewer;

public class MbeanTreeNode extends TreeNode<MbeanTreeNode> {
    private final String mbean;

    public MbeanTreeNode(final String label, final MbeanTreeNode parent, final String mbean) {
        super(label, parent);
        this.mbean = mbean;
    }

    public final String mbean() {
        return mbean;
    }

    @Override
    public String toString() {
        return "MbeanTreeNode[" + this.label() + "]";
    }
}
