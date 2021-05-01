package me.ivanyu.jmxviewer;

import com.googlecode.lanterna.gui2.table.Table;
import com.googlecode.lanterna.input.KeyStroke;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

final class AttributeTable extends Table<String> {
    private final List<AttributeTableItem> items = new ArrayList<>();

    private final Consumer<AttributeTableItem> itemSelectedAction;

    AttributeTable(final Consumer<AttributeTableItem> itemSelectedAction) {
        super("Name", "Value");
        this.itemSelectedAction = itemSelectedAction;
        setEscapeByArrowKey(false);
        getRenderer().setAllowPartialColumn(true);
    }

    final void setItems(final List<AttributeTableItem> items) {
        this.items.clear();
        this.items.addAll(items);

        final var tableModel = getTableModel();
        tableModel.clear();
        for (final var attributeTableItem : items) {
            tableModel.addRow(attributeTableItem.name, attributeTableItem.valueString());
        }
        if (itemSelectedAction != null) {
            if (!items.isEmpty()) {
                itemSelectedAction.accept(items.get(getSelectedRow()));
            } else {
                itemSelectedAction.accept(null);
            }
        }
    }

    @Override
    public Result handleKeyStroke(KeyStroke keyStroke) {
        final int selectedRowBefore = getSelectedRow();
        final Result result = super.handleKeyStroke(keyStroke);

        final int selectedRowAfter = getSelectedRow();
        if (selectedRowAfter != selectedRowBefore && itemSelectedAction != null) {
            itemSelectedAction.accept(items.get(selectedRowAfter));
        }

        return result;
    }
}
