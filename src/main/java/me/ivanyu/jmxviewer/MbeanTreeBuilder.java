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
        final List<MbeanParser.ParsedMbean> mbeans = listMbeans().stream()
                .map(m -> MbeanParser.parse(m.get("objectName").toString()))
                .collect(Collectors.toList());

        for (final MbeanParser.ParsedMbean mbean : mbeans) {
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
