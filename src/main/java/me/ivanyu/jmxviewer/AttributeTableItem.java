package me.ivanyu.jmxviewer;

final class AttributeTableItem {
    final String name;
    final Object value;

    AttributeTableItem(final String name, final Object value) {
        this.name = name;
        this.value = value;
    }

    final String valueString() {
        if (value == null) {
            return "null";
        }
        return value.toString();
    }
}
