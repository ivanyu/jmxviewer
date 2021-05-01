package me.ivanyu.jmxviewer;

import org.jolokia.converter.Converters;
import org.jolokia.converter.json.JsonConvertOptions;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import javax.management.AttributeNotFoundException;
import javax.management.MBeanServerConnection;
import javax.management.ObjectName;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

final class MbeanTreeBuilder {
    private final Converters converters = new Converters();
    private final MBeanServerConnection conn;

    MbeanTreeBuilder(final MBeanServerConnection conn) {
        this.conn = conn;
    }

    final List<MbeanTreeNode> build() {
        final VirtualTreeNode surrogateRoot = new VirtualTreeNode(null);
        final List<ParsedMbean> mbeans = listMbeans().stream()
                .map(m -> parseMbean(m.get("objectName").toString()))
                .collect(Collectors.toList());

        for (final ParsedMbean mbean : mbeans) {
            VirtualTreeNode current = surrogateRoot.children.computeIfAbsent(
                    mbean.domain,
                    ignored -> new VirtualTreeNode(mbean.domain));
            for (final String property : mbean.properties) {
                current = current.children.computeIfAbsent(
                        property,
                        ignored -> new VirtualTreeNode(property));
            }
            current.mbean = mbean.original;
        }

        return materializeMbeanTree(null, surrogateRoot.children);
    }

    private static ParsedMbean parseMbean(final String mbean) {
        String[] parts = mbean.split(":");
        if (parts.length != 2) {
            throw new IllegalArgumentException("Invalid MBean name: " + mbean);
        }

        final String domain = parts[0];
        final List<ParsedMbeanProperty> properties = parseMbeanProperties(parts[1]);

        // type and name must go separately, the rest can be joined.
        final List<String> finalProperties = new ArrayList<>();
        final StringBuilder rest = new StringBuilder();
        for (final ParsedMbeanProperty property : properties) {
            final String str = property.name + "=" + property.value;
            if (property.name.equals("type") || property.name.equals("name")) {
                finalProperties.add(str);
            } else {
                if (rest.length() > 0) {
                    rest.append(",");
                }
                rest.append(str);
            }
        }
        if (rest.length() > 0) {
            finalProperties.add(rest.toString());
        }

        return new ParsedMbean(mbean, domain, finalProperties);
    }

    private static List<MbeanTreeNode> materializeMbeanTree(
            final MbeanTreeNode parent,
            final TreeMap<String, VirtualTreeNode> nodes) {
        final List<MbeanTreeNode> result = new ArrayList<>();
        for (final var entry : nodes.entrySet()) {
            final var node = new MbeanTreeNode(entry.getValue().label, parent, entry.getValue().mbean);
            materializeMbeanTree(node, entry.getValue().children);
            result.add(node);
        }
        return result;
    }

    private static List<ParsedMbeanProperty> parseMbeanProperties(final String properties) {
        return Arrays.stream(properties.split(","))
                .map(property -> {
                    final String[] parts = property.split("=");
                    if (parts.length != 2) {
                        throw new IllegalArgumentException("Invalid MBean property name: " + property);
                    }
                    return new ParsedMbeanProperty(parts[0], parts[1]);
                })
                .sorted(ParsedMbeanProperty.NAME_COMPARATOR)
                .collect(Collectors.toList());
    }

    private List<JSONObject> listMbeans() {
        // TODO optimize JSON out
        try {
            final Set<ObjectName> objectNames = conn.queryNames(null, null);
            final Object json = converters.getToJsonConverter().convertToJson(objectNames, null, JsonConvertOptions.DEFAULT);

            // Something not really expected, but doing the checks anyway.
            if (!(json instanceof JSONArray)) {
                throw new RuntimeException("Invalid JSON");
            }
            @SuppressWarnings("unchecked")
            final List<Object> list = (List<Object>) json;
            if (!list.stream().allMatch(JSONObject.class::isInstance)) {
                throw new RuntimeException("Invalid JSON");
            }

            @SuppressWarnings("unchecked")
            final List<JSONObject> result = (List<JSONObject>) json;
            return result;
        } catch (final IOException | AttributeNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    private static final class ParsedMbean {
        public final String original;
        public final String domain;
        public final List<String> properties;

        private ParsedMbean(final String original, final String domain, final List<String> properties) {
            this.original = original;
            this.domain = domain;
            this.properties = properties;
        }

        @Override
        public String toString() {
            return "ParsedMbean[original=" + original + ", domain=" + domain
                    + ", properties=" + properties + "]";
        }
    }

    private static final class ParsedMbeanProperty {
        final String name;
        final String value;

        private ParsedMbeanProperty(final String name, final String value) {
            this.name = name;
            this.value = value;
        }

        @Override
        public String toString() {
            return "ParsedMbeanProperty[" + name + "=" + value + "]";
        }

        public static final Comparator<ParsedMbeanProperty> NAME_COMPARATOR = (a, b) -> {
            // 'type' is always first, 'name' is always second, the rest is not touched.
            if (a.name.equals("type")) {
                return -1;
            }
            if (b.name.equals("type")) {
                return 1;
            }

            if (a.name.equals("name")) {
                return -1;
            }
            if (b.name.equals("name")) {
                return 1;
            }

            return 0;
        };
    }

    private static final class VirtualTreeNode {
        final String label;
        String mbean = null;
        // TreeMap ensures order by key
        TreeMap<String, VirtualTreeNode> children = new TreeMap<>();

        private VirtualTreeNode(final String label) {
            this.label = label;
        }
    }
}
