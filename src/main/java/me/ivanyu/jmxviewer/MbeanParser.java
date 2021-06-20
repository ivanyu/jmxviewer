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

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;

final class MbeanParser {
    private final String mbean;

    private MbeanParser(final String mbean) {
        this.mbean = mbean;
    }

    private ParsedMbean parse() {
        String domain;
        final List<ParsedMbeanProperty> properties = new ArrayList<>();
        try (final Scanner scanner = new Scanner(mbean)) {
            scanner.useDelimiter("");
            domain = parseDomain(scanner);
            if (scanner.next().charAt(0) != ':') {
                throw new IllegalArgumentException("Cannot parse MBean " + mbean);
            }

            if (scanner.hasNext(",")) {
                throw new IllegalArgumentException("Cannot parse MBean " + mbean);
            }

            while (scanner.hasNext()) {
                properties.add(parseProperty(scanner));

                if (scanner.hasNext()) {
                    if (!scanner.hasNext(",")) {
                        throw new IllegalArgumentException("Cannot parse MBean " + mbean);
                    }
                    scanner.next();  // throw ',' away

                    // We expect something after ','.
                    if (!scanner.hasNext()) {
                        throw new IllegalArgumentException("Cannot parse MBean " + mbean);
                    }
                }
            }
        }
        if (properties.isEmpty()) {
            throw new IllegalArgumentException("Cannot parse MBean " + mbean);
        }
        properties.sort(ParsedMbeanProperty.NAME_COMPARATOR);

        // 'type' and 'name' must go separately, the rest can be joined.
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

    private String parseDomain(final Scanner scanner) {
        final StringBuilder result = new StringBuilder();
        boolean found = false;
        while (scanner.hasNext()) {
            final char c = scanner.next().charAt(0);
            if (c == '"') {
                throw new IllegalArgumentException("Cannot parse MBean " + mbean);
            }

            result.append(c);

            if (scanner.hasNext(":")) {
                found = true;
                break;
            }
        }

        if (!found) {
            throw new IllegalArgumentException("Cannot parse MBean " + mbean);
        }
        if (result.length() == 0) {
            throw new IllegalArgumentException("Cannot parse MBean " + mbean);
        }
        return result.toString();
    }

    private ParsedMbeanProperty parseProperty(final Scanner scanner) {
        // Must never start with ','.
        if (scanner.hasNext(",")) {
            throw new IllegalArgumentException("Cannot parse MBean " + mbean);
        }

        final StringBuilder name = new StringBuilder();
        final StringBuilder value = new StringBuilder();
        boolean isParsingName = true;
        boolean wasInQuotes = false;
        boolean inQuotes = false;
        while (scanner.hasNext()) {
            final char c = scanner.next().charAt(0);

            if (isParsingName) {
                // Quotes in the name are not supported.
                if (c == '"') {
                    throw new IllegalArgumentException("Cannot parse MBean " + mbean);
                }

                if (c == '=') {
                    isParsingName = false;
                } else {
                    name.append(c);
                }
            } else {
                value.append(c);

                if (inQuotes) {
                    if (c == '"') {
                        inQuotes = false;
                    }
                } else {
                    if (c == '"') {
                        inQuotes = true;
                        wasInQuotes = true;
                    }

                    if (scanner.hasNext(",")) {
                        break;
                    }
                }
            }
        }

        // Ended while parsing the name - an invalid MBean.
        if (isParsingName) {
            throw new IllegalArgumentException("Cannot parse MBean " + mbean);
        }

        // Unclosed quotes.
        if (wasInQuotes && inQuotes) {
            throw new IllegalArgumentException("Cannot parse MBean " + mbean);
        }

        // Empty property name.
        if (name.length() == 0) {
            throw new IllegalArgumentException("Cannot parse MBean " + mbean);
        }

        return new ParsedMbeanProperty(name.toString(), value.toString());
    }

    static ParsedMbean parse(final String mbean) {
        return new MbeanParser(mbean).parse();
    }

    static final class ParsedMbean {
        public final String original;
        public final String domain;
        public final List<String> properties;

        ParsedMbean(final String original, final String domain, final List<String> properties) {
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

        ParsedMbeanProperty(final String name, final String value) {
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
}
