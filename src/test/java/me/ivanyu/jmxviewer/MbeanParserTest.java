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

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class MbeanParserTest {
    @Test
    void simple() {
        final String mbean = "kafka.server:brokerHost=127.0.0.1,brokerPort=20010,clientId=ReplicaFetcherThread-0-2,name=BytesPerSec,type=FetcherStats";
        final MbeanParser.ParsedMbean parsedMbean = MbeanParser.parse(mbean);
        assertEquals(mbean, parsedMbean.original);
        assertEquals("kafka.server", parsedMbean.domain);
        assertEquals("type=FetcherStats", parsedMbean.properties.get(0));
        assertEquals("name=BytesPerSec", parsedMbean.properties.get(1));
        assertEquals("brokerHost=127.0.0.1,brokerPort=20010,clientId=ReplicaFetcherThread-0-2", parsedMbean.properties.get(2));
    }

    @Test
    void quotes() {
        final String mbean = "kafka.server:brokerHost=\"fda7:b933:7bfa:4fa6::421\",brokerPort=20010,clientId=ReplicaFetcherThread-0-2,name=BytesPerSec,type=FetcherStats";
        final MbeanParser.ParsedMbean parsedMbean = MbeanParser.parse(mbean);
        assertEquals(mbean, parsedMbean.original);
        assertEquals("kafka.server", parsedMbean.domain);
        assertEquals("type=FetcherStats", parsedMbean.properties.get(0));
        assertEquals("name=BytesPerSec", parsedMbean.properties.get(1));
        assertEquals("brokerHost=\"fda7:b933:7bfa:4fa6::421\",brokerPort=20010,clientId=ReplicaFetcherThread-0-2", parsedMbean.properties.get(2));
    }

    @Test
    void spaces() {
        final String mbean = "java.lang:name=G1 Young Generation,type=GarbageCollector";
        final MbeanParser.ParsedMbean parsedMbean = MbeanParser.parse(mbean);
        assertEquals(mbean, parsedMbean.original);
        assertEquals("java.lang", parsedMbean.domain);
        assertEquals("type=GarbageCollector", parsedMbean.properties.get(0));
        assertEquals("name=G1 Young Generation", parsedMbean.properties.get(1));
    }

    @Test
    void illegalDomainNameQuote() {
        final String mbean = "\"kafka.server\":a=1";
        assertThrows(IllegalArgumentException.class, () -> MbeanParser.parse(mbean));
    }

    @Test
    void noProperties1() {
        final String mbean = "kafka.server";
        assertThrows(IllegalArgumentException.class, () -> MbeanParser.parse(mbean));
    }

    @Test
    void noProperties2() {
        final String mbean = "kafka.server:";
        assertThrows(IllegalArgumentException.class, () -> MbeanParser.parse(mbean));
    }

    @Test
    void noDomain1() {
        final String mbean = "a=1";
        assertThrows(IllegalArgumentException.class, () -> MbeanParser.parse(mbean));
    }

    @Test
    void noDomain2() {
        final String mbean = ":a=1";
        assertThrows(IllegalArgumentException.class, () -> MbeanParser.parse(mbean));
    }

    @Test
    void unclosedQuoteInProperty() {
        final String mbean = "kafka.server:brokerHost=\"fda7:b933:7bfa:4fa6::421,brokerPort=20010,clientId=ReplicaFetcherThread-0-2,name=BytesPerSec,type=FetcherStats";
        assertThrows(IllegalArgumentException.class, () -> MbeanParser.parse(mbean));
    }

    @Test
    void emptyProperty1() {
        final String mbean = "kafka.server:,a=1";
        assertThrows(IllegalArgumentException.class, () -> MbeanParser.parse(mbean));
    }

    @Test
    void emptyProperty2() {
        final String mbean = "kafka.server:a=1,";
        assertThrows(IllegalArgumentException.class, () -> MbeanParser.parse(mbean));
    }

    @Test
    void emptyProperty3() {
        final String mbean = "kafka.server:a=1,,b=2";
        assertThrows(IllegalArgumentException.class, () -> MbeanParser.parse(mbean));
    }

    @Test
    void emptyPropertyName() {
        final String mbean = "kafka.server:=1";
        assertThrows(IllegalArgumentException.class, () -> MbeanParser.parse(mbean));
    }
}
