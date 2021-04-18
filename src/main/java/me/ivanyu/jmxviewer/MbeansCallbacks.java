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

import com.caoccao.javet.annotations.V8Function;
import org.jolokia.converter.Converters;
import org.jolokia.converter.json.JsonConvertOptions;

import javax.management.AttributeList;
import javax.management.AttributeNotFoundException;
import javax.management.MBeanAttributeInfo;
import javax.management.MBeanFeatureInfo;
import javax.management.MBeanInfo;
import javax.management.MBeanServerConnection;
import javax.management.ObjectName;
import javax.management.OperationsException;
import javax.management.ReflectionException;
import java.io.IOException;
import java.util.Arrays;
import java.util.Set;

public final class MbeansCallbacks {
    private final Converters converters = new Converters();
    private final MBeanServerConnection conn;

    public MbeansCallbacks(final MBeanServerConnection conn) {
        this.conn = conn;
    }

    @V8Function(name = "listMbeans")
    public final String listMbeans() {
        try {
            final Set<ObjectName> objectNames = conn.queryNames(null, null);
            return converters.getToJsonConverter().convertToJson(objectNames, null, JsonConvertOptions.DEFAULT).toString();
        } catch (final IOException | AttributeNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    @V8Function(name = "getAttributes")
    public final String getAttributes(final String name) {
        try {
            final ObjectName objName = ObjectName.getInstance(name);
            final MBeanInfo mBeanInfo = conn.getMBeanInfo(objName);
            final String[] attrNames = Arrays.stream(mBeanInfo.getAttributes())
                    .filter(MBeanAttributeInfo::isReadable)
                    .map(MBeanFeatureInfo::getName)
                    .toArray(String[]::new);
            final AttributeList attributes = conn.getAttributes(objName, attrNames);
            return converters.getToJsonConverter().convertToJson(attributes, null, JsonConvertOptions.DEFAULT).toString();
        } catch (final IOException | OperationsException | ReflectionException e) {
            throw new RuntimeException(e);
        }
    }
}
