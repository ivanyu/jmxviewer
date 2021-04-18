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

function listMbeans() {
	return '[{"objectName":"JMImplementation:type=MBeanServerDelegate"}' +
		',{"objectName":"java.lang:type=Runtime"}' +
		',{"objectName":"java.lang:type=Threading"}' +
		',{"objectName":"java.lang:type=OperatingSystem"}' +
		',{"objectName":"java.nio:name=direct,type=BufferPool"}' +
		',{"objectName":"java.lang:type=Compilation"}' +
		',{"objectName":"java.lang:name=G1 Young Generation,type=GarbageCollector"}' +
		',{"objectName":"java.lang:name=CodeCacheManager,type=MemoryManager"}' +
		',{"objectName":"java.lang:name=G1 Old Gen,type=MemoryPool"}' +
		',{"objectName":"java.util.logging:type=Logging"}' +
		',{"objectName":"java.lang:name=G1 Old Generation,type=GarbageCollector"}' +
		',{"objectName":"java.lang:type=ClassLoading"}' +
		',{"objectName":"java.lang:name=Metaspace Manager,type=MemoryManager"}' +
		',{"objectName":"java.lang:name=G1 Survivor Space,type=MemoryPool"}' +
		',{"objectName":"java.lang:name=Metaspace,type=MemoryPool"}' +
		',{"objectName":"java.lang:name=CodeHeap \'profiled nmethods\',type=MemoryPool"}' +
		',{"objectName":"java.lang:name=CodeHeap \'non-nmethods\',type=MemoryPool"}' +
		',{"objectName":"java.lang:name=Compressed Class Space,type=MemoryPool"}' +
		',{"objectName":"java.lang:type=Memory"}' +
		',{"objectName":"java.lang:name=G1 Eden Space,type=MemoryPool"}' +
		',{"objectName":"java.nio:name=mapped,type=BufferPool"}' +
		',{"objectName":"com.sun.management:type=DiagnosticCommand"}' +
		',{"objectName":"java.lang:name=CodeHeap \'non-profiled nmethods\',type=MemoryPool"}' +
		',{"objectName":"com.sun.management:type=HotSpotDiagnostic"}' +
		',{"objectName":"jdk.management.jfr:type=FlightRecorder"}]';
}

function getAttributes(mbeanName) {
	return '[' +
		'{"name":"InputArguments","value":["-Xms128m","-Xmx750m","-XX:ReservedCodeCacheSize=512m","-XX:+UseG1GC","-XX:SoftRefLRUPolicyMSPerMB=50","-XX:CICompilerCount=2","-XX:+HeapDumpOnOutOfMemoryError","-XX:-OmitStackTraceInFastThrow","-ea","-Dsun.io.useCanonCaches=false","-Djdk.http.auth.tunneling.disabledSchemes=\\"\\"","-Djdk.attach.allowAttachSelf=true","-Djdk.module.illegalAccess.silent=true","-Dkotlinx.coroutines.debug=off","-Dsun.tools.attach.tmp.only=true","-XX:ErrorFile=\/home\/ivanyu\/java_error_in_idea_%p.log","-XX:HeapDumpPath=\/home\/ivanyu\/java_error_in_idea_.hprof","-Didea.vendor.name=JetBrains","-Didea.paths.selector=IdeaIC2021.1","-Djb.vmOptionsFile=\/home\/ivanyu\/opt\/idea-IC-211.6693.111\/bin\/idea64.vmoptions","-Didea.platform.prefix=Idea","-Didea.jre.check=true"]}' +
		',{"name":"ClassPath","value":"\/home\/ivanyu\/opt\/idea-IC-211.6693.111\/lib\/bootstrap.jar:\/home\/ivanyu\/opt\/idea-IC-211.6693.111\/lib\/util.jar:\/home\/ivanyu\/opt\/idea-IC-211.6693.111\/lib\/jdom.jar:\/home\/ivanyu\/opt\/idea-IC-211.6693.111\/lib\/log4j.jar:\/home\/ivanyu\/opt\/idea-IC-211.6693.111\/lib\/jna.jar:\/lib\/tools.jar"}' +
		',{"name":"Pid","value":13198}' +
		',{"name":"SpecName","value":"Java Virtual Machine Specification"}' +
		',{"name":"SpecVendor","value":"Oracle Corporation"}' +
		',{"name":"SpecVersion","value":"11"}' +
		',{"name":"ManagementSpecVersion","value":"2.0"}' +
		',{"name":"SystemProperties","value":{"awt.toolkit":"sun.awt.X11.XToolkit","java.specification.version":"11","kotlinx.coroutines.debug":"off","sun.cpu.isalist":"","sun.jnu.encoding":"UTF-8","sun.arch.data.model":"64","idea.fatal.error.notification":"disabled","sun.font.fontmanager":"sun.awt.X11FontManager","pty4j.preferred.native.folder":"\/home\/ivanyu\/opt\/idea-IC-211.6693.111\/lib\/pty4j-native","java.vendor.url":"https:\/\/openjdk.java.net\/","sun.java2d.uiScale.enabled":"true","sun.io.useCanonCaches":"false","sun.boot.library.path":"\/home\/ivanyu\/opt\/idea-IC-211.6693.111\/jbr\/lib","jna.tmpdir":"\/home\/ivanyu\/.cache\/JetBrains\/IdeaIC2021.1\/tmp","sun.java.command":"com.intellij.idea.Main","jdk.debug":"release","sun.awt.exception.handler":"com.intellij.openapi.application.impl.AWTExceptionHandler","java.specification.vendor":"Oracle Corporation","java.version.date":"2021-01-19","java.home":"\/home\/ivanyu\/opt\/idea-IC-211.6693.111\/jbr","file.separator":"\/","java.vm.compressedOopsMode":"32-bit","line.separator":"\\n","jdk.attach.allowAttachSelf":"true","java.vm.specification.vendor":"Oracle Corporation","java.specification.name":"Java Platform API Specification","pty4j.tmpdir":"\/home\/ivanyu\/.cache\/JetBrains\/IdeaIC2021.1\/tmp","sun.management.compiler":"HotSpot 64-Bit Tiered Compilers","java.runtime.version":"11.0.10+9-b1341.35","user.name":"ivanyu","javax.swing.rebaseCssSizeMap":"true","idea.paths.selector":"IdeaIC2021.1","sun.java2d.pmoffscreen":"false","sun.awt.noerasebackground":"true","file.encoding":"UTF-8","jnidispatch.path":"\/home\/ivanyu\/.cache\/JetBrains\/IdeaIC2021.1\/tmp\/jna13907651475051237625.tmp","idea.popup.weight":"heavy","java.vendor.version":"JBR-11.0.10.9-1341.35-dcevm","jna.loaded":"true","java.io.tmpdir":"\/tmp","java.version":"11.0.10","idea.xdebug.key":"-Xdebug","java.vm.specification.name":"Java Virtual Machine Specification","idea.jre.check":"true","java.awt.printerjob":"sun.print.PSPrinterJob","sun.os.patch.level":"unknown","java.library.path":"\/usr\/java\/packages\/lib:\/usr\/lib64:\/lib64:\/lib:\/usr\/lib","java.vendor":"JetBrains s.r.o.","io.netty.processId":"40956","java.rmi.server.randomIDs":"true","sun.io.unicode.encoding":"UnicodeLittle","java.rmi.server.disableHttp":"true","library.jansi.path":"\/home\/ivanyu\/.gradle\/native\/jansi\/1.18\/linux64","io.netty.machineId":"28:f0:76:ff:fe:16:65:0e","idea.platform.prefix":"Idea","java.class.path":"\/home\/ivanyu\/opt\/idea-IC-211.6693.111\/lib\/bootstrap.jar:\/home\/ivanyu\/opt\/idea-IC-211.6693.111\/lib\/util.jar:\/home\/ivanyu\/opt\/idea-IC-211.6693.111\/lib\/jdom.jar:\/home\/ivanyu\/opt\/idea-IC-211.6693.111\/lib\/log4j.jar:\/home\/ivanyu\/opt\/idea-IC-211.6693.111\/lib\/jna.jar:\/lib\/tools.jar","sun.awt.enableExtraMouseButtons":"true","java.vm.vendor":"JetBrains s.r.o.","sun.tools.attach.tmp.only":"true","idea.vendor.name":"JetBrains","user.timezone":"Europe\/Kiev","jb.vmOptionsFile":"\/home\/ivanyu\/opt\/idea-IC-211.6693.111\/bin\/idea64.vmoptions","idea.no.launcher":"false","swing.bufferPerWindow":"true","os.name":"Linux","java.vm.specification.version":"11","sun.java.launcher":"SUN_STANDARD","user.country":"US","sun.cpu.endian":"little","user.home":"\/home\/ivanyu","jdk.http.auth.tunneling.disabledSchemes":"\\"\\"","user.language":"en","idea.cycle.buffer.size":"1024","io.netty.allocator.numHeapArenas":"1","log4j.defaultInitOverride":"true","java.awt.graphicsenv":"sun.awt.X11GraphicsEnvironment","io.netty.allocator.numDirectArenas":"1","idea.max.intellisense.filesize":"2500","sun.java2d.d3d":"false","io.netty.allocator.useCacheForAllThreads":"false","path.separator":":","com.jetbrains.suppressWindowRaise":"false","os.version":"4.4.0-19041-Microsoft","jna.nosys":"true","java.runtime.name":"OpenJDK Runtime Environment","io.netty.allocator.cacheTrimIntervalMillis":"600000","jdk.module.illegalAccess.silent":"true","sun.nio.ch.bugLevel":"","java.vm.name":"Dynamic Code Evolution 64-Bit Server VM","jna.platform.library.path":"\/usr\/lib\/x86_64-linux-gnu:\/lib\/x86_64-linux-gnu:\/lib64:\/usr\/lib:\/lib:\/lib32:\/usr\/lib32:\/usr\/lib\/x86_64-linux-gnu\/libfakeroot","java.vendor.url.bug":"https:\/\/bugreport.java.com\/bugreport\/","java.util.concurrent.ForkJoinPool.common.threadFactory":"com.intellij.concurrency.IdeaForkJoinWorkerThreadFactory","user.dir":"\/mnt\/c\/Users\/ivanyu","os.arch":"amd64","io.netty.serviceThreadPrefix":"Netty ","idea.dynamic.classpath":"false","java.vm.info":"mixed mode","java.vm.version":"11.0.10+9-b1341.35","java.rmi.server.hostname":"127.0.0.1","idea.max.content.load.filesize":"20000","sun.awt.datatransfer.timeout":"2000","apple.awt.UIElement":"true","java.class.version":"55.0"}}' +
		',{"name":"Name","value":"13198@DESKTOP"}' +
		',{"name":"BootClassPathSupported","value":false}' +
		',{"name":"VmName","value":"Dynamic Code Evolution 64-Bit Server VM"}' +
		',{"name":"VmVendor","value":"JetBrains s.r.o."}' +
		',{"name":"VmVersion","value":"11.0.10+9-b1341.35"}' +
		',{"name":"LibraryPath","value":"\/usr\/java\/packages\/lib:\/usr\/lib64:\/lib64:\/lib:\/usr\/lib"}' +
		',{"name":"Uptime","value":1043738}' +
		',{"name":"StartTime","value":1618665378116}' +
		',{"name":"ObjectName","value":{"objectName":"java.lang:type=Runtime"}}]';
}
