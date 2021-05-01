package me.ivanyu.jmxviewer;

import org.jolokia.converter.Converters;
import org.jolokia.converter.json.JsonConvertOptions;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import javax.management.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public final class MbeanAttributeTableBuilder {
    private final Converters converters = new Converters();
    private final MBeanServerConnection conn;

    public MbeanAttributeTableBuilder(final MBeanServerConnection conn) {
        this.conn = conn;
    }

    public final List<AttributeTableItem> build(final String mbean) {
        try {
            final ObjectName objName = ObjectName.getInstance(mbean);
            final MBeanInfo mBeanInfo = conn.getMBeanInfo(objName);
            final String[] attrNames = Arrays.stream(mBeanInfo.getAttributes())
                    .filter(MBeanAttributeInfo::isReadable)
                    .map(MBeanFeatureInfo::getName)
                    .toArray(String[]::new);
            final AttributeList attributesList = conn.getAttributes(objName, attrNames);
            final JSONArray attributes = (JSONArray) converters.getToJsonConverter()
                    .convertToJson(attributesList, null, JsonConvertOptions.DEFAULT);
            final ArrayList<AttributeTableItem> result = new ArrayList<>();
            for (final Object o : attributes) {
                final JSONObject attrObject = (JSONObject) o;
                result.add(new AttributeTableItem((String) attrObject.get("name"), attrObject.get("value")));
            }
            return result;
        } catch (final IOException | OperationsException | ReflectionException e) {
            throw new RuntimeException(e);
        }
    }
}
