package me.ivanyu.jmxviewer;

import com.googlecode.lanterna.TerminalSize;
import com.googlecode.lanterna.gui2.*;
import com.googlecode.lanterna.input.KeyStroke;
import com.googlecode.lanterna.input.KeyType;
import com.sun.tools.attach.VirtualMachineDescriptor;

import java.lang.reflect.Field;
import java.util.List;
import java.util.function.Consumer;

final class MainWindow extends BasicWindow {
    private static final TerminalSize MAX_SIZE =
            new TerminalSize(5000, 5000);  // Lanterna uses 5000 as maximum

    private final PrettyPrinter pp = new PrettyPrinter();

    private final MbeanAttributeTableBuilder mbeanAttributeTableBuilder;

    private final TreeBox<MbeanTreeNode> mbeanTree;
    private final AttributeTable attrTable;
    private final TextBox valueTextBox;
    private final SplitPanel leftRightPanel;

    MainWindow(final VirtualMachineDescriptor vmDescriptor,
               final MbeanTreeBuilder mbeanTreeBuilder,
               final MbeanAttributeTableBuilder mbeanAttributeTableBuilder) {
        this.mbeanAttributeTableBuilder = mbeanAttributeTableBuilder;

        this.setHints(List.of(Hint.NO_POST_RENDERING, Hint.FULL_SCREEN, Hint.NO_DECORATIONS));

        /*
          Layout:

          topLabel
          +---------+--------------+
          |  mbean  | attrTable    |
          |  Tree   +--------------+
          |         | valueTextBox |
          +---------+--------------+
          bottomLabel
         */

        final Panel contentPanel = new Panel();
        contentPanel.setLayoutManager(new BorderLayout());
        this.setComponent(contentPanel);

        final Label topLabel = new Label("" + vmDescriptor.id() + " - " + vmDescriptor.displayName());
        contentPanel.addComponent(topLabel, BorderLayout.Location.TOP);

        final Label bottomLabel = new Label(
                "Space - Expand/collapse tree | Enter/Esc - Show/hide attributes | " +
                        "(Shift-)Tab - Jump around | Q - Exit");
        contentPanel.addComponent(bottomLabel, BorderLayout.Location.BOTTOM);

        mbeanTree = new TreeBox<>();
        mbeanTree.setPreferredSize(MAX_SIZE);

        valueTextBox = new TextBox(MAX_SIZE);
        valueTextBox.setReadOnly(true);
        valueTextBox.setVerticalFocusSwitching(false);
        valueTextBox.setHorizontalFocusSwitching(false);

        final Consumer<AttributeTableItem> attrTableItemSelectedAction = (item) -> {
            if (item != null) {
                valueTextBox.setText(pp.prettyPrint(item.value));
            } else {
                valueTextBox.setText("");
            }
        };
        attrTable = new AttributeTable(attrTableItemSelectedAction);
        attrTable.setPreferredSize(MAX_SIZE);

        final SplitPanel bottomUpPanel = SplitPanel.ofVertical(
                attrTable.withBorder(Borders.singleLine("Attributes")),
                valueTextBox.withBorder(Borders.singleLine("Value zoom"))
        );

        leftRightPanel = SplitPanel.ofHorizontal(
                mbeanTree.withBorder(Borders.singleLine("MBeans")),
                bottomUpPanel
        );
        contentPanel.addComponent(leftRightPanel, BorderLayout.Location.CENTER);

        disableAndHideThumbs(leftRightPanel, bottomUpPanel);

        hideAttributes();

        for (final var rootNode : mbeanTreeBuilder.build()) {
            mbeanTree.addRootNode(rootNode);
        }
    }

    /**
     * Disable and hide thumbs in {@link SplitPanel}s.
     *
     * This won't be needed when https://github.com/mabe02/lanterna/pull/542
     * and https://github.com/mabe02/lanterna/pull/543 are merged.
     */
    private void disableAndHideThumbs(final SplitPanel ... panels) {
        try {
            final Field splitPanelThumb = SplitPanel.class.getDeclaredField("thumb");
            splitPanelThumb.setAccessible(true);

            for (final SplitPanel panel : panels) {
                Interactable thumb = (Interactable) splitPanelThumb.get(panel);
                thumb.setEnabled(false);
                thumb.setVisible(false);
                thumb.setPreferredSize(new TerminalSize(0, 0));
            }
        } catch (final IllegalAccessException | NoSuchFieldException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public boolean handleInput(final KeyStroke key) {
        if (key.getKeyType() == KeyType.Enter) {
            final String selectedMbean = mbeanTree.getSelectedItem().mbean();
            if (selectedMbean != null) {
                showAttributes(selectedMbean);
            }
            return true;
        }

        if (key.getKeyType() == KeyType.Escape) {
            hideAttributes();
            return true;
        }

        return super.handleInput(key);
    }

    private void showAttributes(final String mbean) {
        final List<AttributeTableItem> items = mbeanAttributeTableBuilder.build(mbean);
        if (!items.isEmpty()) {
            attrTable.setItems(items);
            attrTable.setEnabled(true);
            valueTextBox.setEnabled(true);
        } else {
            // Add a surrogate item to prevent rendering failure.
            attrTable.setItems(List.of(new AttributeTableItem("", "")));
            attrTable.setEnabled(false);
            valueTextBox.setEnabled(false);
        }

        leftRightPanel.setRatio(1, 3);
    }

    private void hideAttributes() {
        leftRightPanel.setRatio(1, 0);
        mbeanTree.takeFocus();
        attrTable.setEnabled(false);
        valueTextBox.setEnabled(false);
    }
}
