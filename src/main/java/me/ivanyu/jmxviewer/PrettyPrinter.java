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

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;

import java.util.Map;

public final class PrettyPrinter {
    private final int COMPACT_VALUE_LIMIT = 30;
    private final String INDENT_STEP = "  ";

    public final String prettyPrint(final Object value) {
        return prettyPrint(0, false, value);
    }

    private String prettyPrint(final int indent, final boolean inJson, final Object value) {
        if (value == null) {
            return "null";
        }

        if (value instanceof JSONObject) {
            return prettyPrintJsonObject(indent, (JSONObject) value);
        }

        if (value instanceof JSONArray) {
            return prettyPrintJsonArray(indent, (JSONArray) value);
        }

        if (inJson) {
            return JSONValue.toJSONString(value);
        }

        return value.toString();
    }

    private String prettyPrintJsonObject(final int indent, final JSONObject jsonObject) {
        if (jsonObject.isEmpty()) {
            return "{}";
        }

        final String indentStr = INDENT_STEP.repeat(indent);

        final StringBuilder sbExpanded = new StringBuilder();
        final StringBuilder sbCompact = new StringBuilder();

        sbExpanded.append("{\n");
        sbCompact.append("{");

        boolean first = true;
        for (final Object value : jsonObject.entrySet()) {
            @SuppressWarnings("unchecked")
            final var entry = (Map.Entry<String, Object>) value;

            if (first) {
                first = false;
            } else {
                sbExpanded.append(",\n");
                sbCompact.append(", ");
            }

            sbExpanded.append(indentStr).append(INDENT_STEP).append('\"');
            sbCompact.append('\"');
            if (entry.getKey() == null) {
                sbExpanded.append("null");
                sbCompact.append("null");
            } else {
                final String keyEscaped = JSONValue.escape(entry.getKey());
                sbExpanded.append(keyEscaped);
                sbCompact.append(keyEscaped);
            }
            sbExpanded.append("\": ");
            sbCompact.append("\": ");

            sbExpanded.append(prettyPrint(indent + 1, true, entry.getValue()));
            sbCompact.append(prettyPrint(indent + 1, true, entry.getValue()));
        }
        sbExpanded.append('\n').append(indentStr).append('}');
        sbCompact.append('}');

        // TODO base on the number of levels
        if (sbCompact.toString().length() < COMPACT_VALUE_LIMIT) {
            return sbCompact.toString();
        }
        return sbExpanded.toString();
    }

    private String prettyPrintJsonArray(final int indent, final JSONArray jsonArray) {
        if (jsonArray.isEmpty()) {
            return "[]";
        }

        final String indentStr = INDENT_STEP.repeat(indent);

        final StringBuilder sbExpanded = new StringBuilder();
        final StringBuilder sbCompact = new StringBuilder();

        sbExpanded.append("[\n");
        sbCompact.append("[");

        boolean first = true;
        for (final Object value : jsonArray) {
            if (first) {
                first = false;
            } else {
                sbExpanded.append(",\n");
                sbCompact.append(", ");
            }

            sbExpanded.append(indentStr).append(INDENT_STEP);
            if (value == null) {
                sbExpanded.append("null");
                sbCompact.append("null");
            } else {
                sbExpanded.append(prettyPrint(indent + 1, true, value));
                sbCompact.append(prettyPrint(indent + 1, true, value));
            }
        }
        sbExpanded.append('\n').append(indentStr).append(']');
        sbCompact.append(']');

        // TODO base on the number of levels
        if (sbCompact.toString().length() < COMPACT_VALUE_LIMIT) {
            return sbCompact.toString();
        }
        return sbExpanded.toString();
    }
}
