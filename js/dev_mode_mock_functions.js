function listMbeans() {
	return `[
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=37,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=ListGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=34,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=Heartbeat,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=DeleteGroups,type=RequestMetrics"
		},
		{
		  "objectName": "java.lang:type=Threading"
		},
		{
		  "objectName": "kafka.controller:name=GlobalPartitionCount,type=KafkaController"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=45,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=11,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=18,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=34,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.controller:name=ListPartitionReassignmentRateAndTimeMs,type=ControllerStats"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=DeleteGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=CreateAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.controller:name=ControlledShutdownRateAndTimeMs,type=ControllerStats"
		},
		{
		  "objectName": "kafka.server:type=transaction-coordinator-metrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=ApiVersions,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=ZooKeeperRequestLatencyMs,type=ZooKeeperClientMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=0,topic=aaa,type=Log"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=3,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=2,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.server:name=RequestHandlerAvgIdlePercent,type=KafkaRequestHandlerPool"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=AlterPartitionReassignments,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=43,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:error=NONE,name=ErrorsPerSec,request=Fetch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=FetchConsumer,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=DescribeLogDirs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=RenewDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:delayedOperation=Heartbeat,name=PurgatorySize,type=DelayedOperationPurgatory"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=1,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=StopReplica,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=AddOffsetsToTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=32,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:logDirectory=\\"/tmp/kafka-logs\\",name=uncleanable-bytes,type=LogCleanerManager"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=2,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=ApiVersions,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=UpdateMetadata,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=25,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=OffsetForLeaderEpoch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=SaslAuthenticate,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=28,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=DescribeClientQuotas,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:clientSoftwareName=apache-kafka-java,clientSoftwareVersion=2.7.0,listener=PLAINTEXT,networkProcessor=0,type=socket-server-metrics"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=StopReplica,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=48,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=0,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=0,topic=bbb,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=38,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=37,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.server:listener=PLAINTEXT,networkProcessor=1,type=socket-server-metrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=32,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=0,topic=aaabbb,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=DescribeClientQuotas,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=LeaveGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=BytesInPerSec,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=2,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=3,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=OffsetFetch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=20,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=ExpireDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=UpdateFeatures,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=30,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.server:clientId=Replica,name=DeadThreadCount,type=ReplicaFetcherManager"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=AlterPartitionReassignments,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=AddPartitionsToTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=FetchFollower,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:fetcherType=follower,name=ExpiresPerSec,type=DelayedFetchMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=28,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=InitProducerId,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=39,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=DeleteGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=FetchConsumer,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=WriteTxnMarkers,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=0,topic=bbb,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=0,topic=bbb,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=SaslHandshake,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=DescribeClientQuotas,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=DescribeLogDirs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:type=Request"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=0,topic=aaa,type=Partition"
		},
		{
		  "objectName": "java.lang:type=Runtime"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=10,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=Heartbeat,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=max-compaction-delay-secs,type=LogCleaner"
		},
		{
		  "objectName": "kafka.server:clientSoftwareName=unknown,clientSoftwareVersion=unknown,listener=PLAINTEXT,networkProcessor=0,type=socket-server-metrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=UpdateFeatures,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=DeleteRecords,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=AlterIsr,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=0,topic=bbb,type=Log"
		},
		{
		  "objectName": "kafka.server:name=NumIncrementalFetchPartitionsCached,type=FetchSessionCache"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=44,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=25,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=10,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=37,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=5,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=40,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=9,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=StopReplica,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=15,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=30,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=DescribeDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=1,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=ControlledShutdown,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:delayedOperation=AlterAcls,name=PurgatorySize,type=DelayedOperationPurgatory"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=CreatePartitions,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=4,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=29,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=ListOffsets,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=23,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=OffsetForLeaderEpoch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=39,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=23,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=7,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=TemporaryMemoryBytes,request=Produce,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=DeleteTopics,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=45,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=AlterPartitionReassignments,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=InitProducerId,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=Metadata,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=DeleteTopics,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=17,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=DeleteRecords,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=ControlledShutdown,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=14,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=DeleteTopics,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=DeleteGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:error=NONE,name=ErrorsPerSec,request=LeaderAndIsr,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=15,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=CreateTopics,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.controller:name=PartitionReassignmentRateAndTimeMs,type=ControllerStats"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=0,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=40,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=DescribeUserScramCredentials,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=DescribeLogDirs,type=RequestMetrics"
		},
		{
		  "objectName": "java.lang:name=G1 Old Generation,type=GarbageCollector"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=43,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=AlterReplicaLogDirs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=37,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.server:delayedOperation=AlterAcls,name=NumDelayedOperations,type=DelayedOperationPurgatory"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=ListPartitionReassignments,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=AddOffsetsToTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=12,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=20,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=48,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=AddPartitionsToTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=0,topic=aaabbb,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=41,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=45,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=28,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=TxnOffsetCommit,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=35,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=RenewDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=32,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=6,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=39,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=ListOffsets,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=OffsetForLeaderEpoch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=CreateDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=4,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=10,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=7,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=6,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=DeleteRecords,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=0,topic=aaabbb,type=Log"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=11,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=0,topic=bbb,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=14,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=DescribeClientQuotas,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=21,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=Fetch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=19,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=29,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.coordinator.group:name=NumGroupsDead,type=GroupMetadataManager"
		},
		{
		  "objectName": "kafka.server:name=BrokerState,type=KafkaServer"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueSize,processor=0,type=RequestChannel"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=19,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=46,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=DescribeGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=42,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=InitProducerId,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=IncrementalAlterConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=19,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:error=NONE,name=ErrorsPerSec,request=SyncGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=CreateAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=42,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.server:name=TotalFetchRequestsPerSec,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.network:error=NONE,name=ErrorsPerSec,request=ListOffsets,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=DescribeDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=47,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=17,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=44,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=DeleteAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=0,topic=aaa,type=Log"
		},
		{
		  "objectName": "kafka.server:name=NumIncrementalFetchSessions,type=FetchSessionCache"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=RenewDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=AlterReplicaLogDirs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=4,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=DescribeUserScramCredentials,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:clientSoftwareName=apache-kafka-java,clientSoftwareVersion=2.7.0,listener=PLAINTEXT,networkProcessor=1,type=socket-server-metrics"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=SaslAuthenticate,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=DescribeDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "java.lang:name=CodeHeap 'non-profiled nmethods',type=MemoryPool"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=JoinGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=Heartbeat,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=BytesOutPerSec,topic=aaabbb,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=12,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=47,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=29,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=22,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:error=NONE,name=ErrorsPerSec,request=UpdateMetadata,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=CreatePartitions,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=Fetch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=19,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=26,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=0,topic=bbb,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=1,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=AlterIsr,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=DescribeClientQuotas,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=20,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=13,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=27,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.server:name=IncrementalFetchSessionEvictionsPerSec,type=FetchSessionCache"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=9,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=AlterPartitionReassignments,type=RequestMetrics"
		},
		{
		  "objectName": "kafka:type=kafka.Log4jController"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=InitProducerId,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:delayedOperation=ElectLeader,name=PurgatorySize,type=DelayedOperationPurgatory"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=28,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=UpdateFeatures,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=38,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=45,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=41,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=40,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=0,topic=aaabbb,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=AlterIsr,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=24,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=31,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=Metadata,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:error=MEMBER_ID_REQUIRED,name=ErrorsPerSec,request=JoinGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=19,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=36,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=8,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=ExpireDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=2,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=33,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestsPerSec,request=Fetch,type=RequestMetrics,version=12"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=OffsetCommit,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=5,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=DeleteAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.coordinator.transaction:name=LogAppendRetryQueueSize,type=TransactionMarkerChannelManager"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=2,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=41,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=43,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=FindCoordinator,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=DescribeConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=45,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=16,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=AddPartitionsToTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=TxnOffsetCommit,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=DescribeGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=10,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=Heartbeat,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=AlterIsr,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=ListOffsets,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=12,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.controller:name=ManualLeaderBalanceRateAndTimeMs,type=ControllerStats"
		},
		{
		  "objectName": "kafka.network:error=NONE,name=ErrorsPerSec,request=OffsetFetch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=9,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.server:name=BytesRejectedPerSec,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=AlterPartitionReassignments,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=FetchFollower,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=OffsetCommit,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=FetchConsumer,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=24,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=43,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=DescribeDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=33,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=CreateDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestsPerSec,request=OffsetFetch,type=RequestMetrics,version=7"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=46,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=StopReplica,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=31,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=11,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=FetchFollower,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:delayedOperation=Heartbeat,name=NumDelayedOperations,type=DelayedOperationPurgatory"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=32,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=11,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "java.lang:name=Metaspace Manager,type=MemoryManager"
		},
		{
		  "objectName": "kafka.controller:name=UncleanLeaderElectionsPerSec,type=ControllerStats"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=23,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=0,topic=aaabbb,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=ListPartitionReassignments,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=13,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=34,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "java.lang:name=CodeHeap 'profiled nmethods',type=MemoryPool"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=AlterReplicaLogDirs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=OffsetCommit,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=10,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.server:name=FailedProduceRequestsPerSec,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=31,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=CreateAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=ApiVersions,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=46,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=21,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=25,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=21,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=WriteTxnMarkers,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=StopReplica,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=UpdateFeatures,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=AddOffsetsToTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=JoinGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:error=NONE,name=ErrorsPerSec,request=FindCoordinator,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=FetchConsumer,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=2,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=0,topic=aaabbb,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=StopReplica,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:delayedOperation=Rebalance,name=PurgatorySize,type=DelayedOperationPurgatory"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=DescribeConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=Fetch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=2,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=0,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=WriteTxnMarkers,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:type=kafka-metrics-count"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=27,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=22,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=49,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=0,topic=aaabbb,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=13,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=AlterClientQuotas,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=max-buffer-utilization-percent,type=LogCleaner"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=DescribeDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=1,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=IncrementalAlterConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=5,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=7,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=33,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=33,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=18,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=16,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=11,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=DescribeAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=27,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=Metadata,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=47,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.server:clientId=Replica,name=MinFetchRate,type=ReplicaFetcherManager"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=TxnOffsetCommit,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=InvalidOffsetOrSequenceRecordsPerSec,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=13,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=16,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=SaslHandshake,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=UpdateMetadata,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=33,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=21,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.coordinator.group:name=NumGroupsPreparingRebalance,type=GroupMetadataManager"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=ExpireDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "java.nio:name=mapped,type=BufferPool"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=TxnOffsetCommit,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=ListOffsets,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=46,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "com.sun.management:type=DiagnosticCommand"
		},
		{
		  "objectName": "kafka.network:error=NONE,name=ErrorsPerSec,request=Produce,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=AlterPartitionReassignments,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=4,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=AlterPartitionReassignments,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=13,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.server:name=ZooKeeperReadOnlyConnectsPerSec,type=SessionExpireListener"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=37,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=ListOffsets,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=9,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=6,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=44,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=31,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=CreateTopics,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=AlterReplicaLogDirs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=5,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=SyncGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=11,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=MemoryPoolUsed,type=SocketServer"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=AlterConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=49,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=CreatePartitions,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=8,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=27,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=ElectLeaders,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=35,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=ElectLeaders,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=CreateTopics,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=AlterConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=47,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.server:delayedOperation=DeleteRecords,name=NumDelayedOperations,type=DelayedOperationPurgatory"
		},
		{
		  "objectName": "kafka.server:name=LeaderCount,type=ReplicaManager"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=LeaderAndIsr,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=42,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=UpdateMetadata,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=OffsetCommit,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=33,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=18,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=Produce,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=EndTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=IdlePercent,networkProcessor=1,type=Processor"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=ApiVersions,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=SyncGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=3,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=44,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=6,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=JoinGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=11,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=AlterIsr,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestsPerSec,request=LeaderAndIsr,type=RequestMetrics,version=4"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=17,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=42,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=Heartbeat,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=11,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=ElectLeaders,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=ElectLeaders,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=DescribeAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=EndTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=33,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "java.lang:name=G1 Young Generation,type=GarbageCollector"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=7,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=6,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=0,topic=bbb,type=Partition"
		},
		{
		  "objectName": "kafka.controller:name=UncleanLeaderElectionEnableRateAndTimeMs,type=ControllerStats"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=ListGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=0,topic=aaa,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=DescribeLogDirs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=25,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=UpdateFeatures,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=AlterClientQuotas,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=SessionState,type=SessionExpireListener"
		},
		{
		  "objectName": "kafka.server:name=FetchMessageConversionsPerSec,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=12,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=DeleteRecords,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=36,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=FindCoordinator,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=CreateTopics,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:clientId=Replica,name=FailedPartitionsCount,type=ReplicaFetcherManager"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=18,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=41,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.server:delayedOperation=DeleteRecords,name=PurgatorySize,type=DelayedOperationPurgatory"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=1,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=13,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.controller:name=ReplicasIneligibleToDeleteCount,type=KafkaController"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=UpdateMetadata,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=0,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=32,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=AlterReplicaLogDirs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=ExpireDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=AlterConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:id=0,type=app-info"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=OffsetFetch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=SyncGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=0,topic=bbb,type=Partition"
		},
		{
		  "objectName": "kafka.controller:name=TopicChangeRateAndTimeMs,type=ControllerStats"
		},
		{
		  "objectName": "kafka.network:name=IdlePercent,networkProcessor=2,type=Processor"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=24,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=OffsetDelete,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=18,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=SaslAuthenticate,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=46,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.server:clientSoftwareName=apache-kafka-java,clientSoftwareVersion=2.7.0,listener=PLAINTEXT,networkProcessor=2,type=socket-server-metrics"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=38,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=18,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.controller:name=ControllerChangeRateAndTimeMs,type=ControllerStats"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=ListOffsets,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.controller:name=EventQueueTimeMs,type=ControllerEventManager"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=35,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=AlterClientQuotas,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=35,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=0,topic=aaa,type=Log"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=26,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=41,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=DescribeLogDirs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=ListPartitionReassignments,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=WriteTxnMarkers,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=AlterConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=15,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.server:name=ZooKeeperExpiresPerSec,type=SessionExpireListener"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=46,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=13,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=48,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.server:name=MessagesInPerSec,topic=__consumer_offsets,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=DescribeGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=DescribeConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=UpdateFeatures,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.coordinator.group:name=NumOffsets,type=GroupMetadataManager"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=DeleteRecords,type=RequestMetrics"
		},
		{
		  "objectName": "java.lang:name=G1 Survivor Space,type=MemoryPool"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=26,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=0,topic=aaabbb,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=37,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=0,topic=aaa,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=20,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=ExpireDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=FindCoordinator,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=33,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=OffsetForLeaderEpoch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=OffsetCommit,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=3,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=9,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=Produce,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=5,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=30,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=12,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=8,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=37,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=OffsetDelete,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=LeaderAndIsr,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=4,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=16,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=5,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueSize,type=RequestChannel"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=AlterConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=4,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "com.sun.management:type=HotSpotDiagnostic"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=InitProducerId,type=RequestMetrics"
		},
		{
		  "objectName": "jdk.management.jfr:type=FlightRecorder"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=42,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.controller:name=IsrChangeRateAndTimeMs,type=ControllerStats"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=Metadata,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=AlterConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=40,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=2,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.server:name=FailedFetchRequestsPerSec,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.controller:name=TopicDeletionRateAndTimeMs,type=ControllerStats"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=ControlledShutdown,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=PartitionCount,type=ReplicaManager"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=ControlledShutdown,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=25,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=36,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=24,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=31,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=5,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=15,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=SyncGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=Produce,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=ElectLeaders,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=3,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=3,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.server:listener=PLAINTEXT,networkProcessor=2,type=socket-server-metrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=DescribeAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=OffsetCommit,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=DescribeConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=16,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=34,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=14,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=18,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=14,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.coordinator.group:name=NumGroups,type=GroupMetadataManager"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=UpdateMetadata,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=LeaderAndIsr,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=CreateAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=ControlledShutdown,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=46,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=32,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=38,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.server:name=NoKeyCompactedTopicRecordsPerSec,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.controller:name=LogDirChangeRateAndTimeMs,type=ControllerStats"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=DescribeDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=BytesInPerSec,topic=aaa,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=40,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.server:name=BytesOutPerSec,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=15,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=LeaderAndIsr,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=17,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=Produce,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=OffsetCommit,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestsPerSec,request=FindCoordinator,type=RequestMetrics,version=3"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=AlterUserScramCredentials,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=ProduceMessageConversionsPerSec,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.network:name=IdlePercent,networkProcessor=0,type=Processor"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=39,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=AlterConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=47,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=CreateAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:error=COORDINATOR_NOT_AVAILABLE,name=ErrorsPerSec,request=FindCoordinator,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=17,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=38,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=3,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=47,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=41,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=Fetch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=SaslHandshake,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=CreatePartitions,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=21,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=29,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=36,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=9,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=FetchFollower,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=14,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=12,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.controller:name=ReplicasToDeleteCount,type=KafkaController"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=DescribeDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=26,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=19,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=ExpireDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "java.lang:name=CodeHeap 'non-nmethods',type=MemoryPool"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=ListOffsets,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:listener=PLAINTEXT,networkProcessor=0,type=socket-server-metrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=Metadata,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=DescribeLogDirs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=26,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=UpdateFeatures,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=MemoryPoolAvailable,type=SocketServer"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=35,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.server:name=IsrExpandsPerSec,type=ReplicaManager"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=DescribeUserScramCredentials,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:clientId=ReplicaAlterLogDirs,name=DeadThreadCount,type=ReplicaAlterLogDirsManager"
		},
		{
		  "objectName": "kafka.network:name=RequestsPerSec,request=Heartbeat,type=RequestMetrics,version=4"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=25,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=DescribeGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=MessagesInPerSec,topic=aaabbb,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.server:name=BytesInPerSec,topic=aaabbb,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.controller:name=TopicUncleanLeaderElectionEnableRateAndTimeMs,type=ControllerStats"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=OffsetCommit,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=SyncGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=9,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=ElectLeaders,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=FetchConsumer,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=39,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=4,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=39,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=38,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RequestsPerSec,request=LeaveGroup,type=RequestMetrics,version=4"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=StopReplica,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=BytesInPerSec,topic=__consumer_offsets,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=DescribeConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=1,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=max-clean-time-secs,type=LogCleaner"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=38,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=41,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=LeaderAndIsr,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=34,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=48,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=EndTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=12,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.server:name=yammer-metrics-count,type=KafkaServer"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=InitProducerId,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=IncrementalAlterConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=MessagesInPerSec,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=40,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=2,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=OffsetDelete,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:error=NONE,name=ErrorsPerSec,request=Heartbeat,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:delayedOperation=topic,name=PurgatorySize,type=DelayedOperationPurgatory"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=21,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.server:delayedOperation=Fetch,name=NumDelayedOperations,type=DelayedOperationPurgatory"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=DescribeClientQuotas,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=AlterUserScramCredentials,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.controller:name=GlobalTopicCount,type=KafkaController"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=49,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=15,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.server:name=ZooKeeperSaslAuthenticationsPerSec,type=SessionExpireListener"
		},
		{
		  "objectName": "kafka.server:name=InvalidMagicNumberRecordsPerSec,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=45,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=48,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=IncrementalAlterConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=StopReplica,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=DeleteAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=TotalProduceRequestsPerSec,topic=aaabbb,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.server:name=BytesInPerSec,topic=bbb,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=Fetch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=AlterUserScramCredentials,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=CreateTopics,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestsPerSec,request=SyncGroup,type=RequestMetrics,version=5"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=RenewDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=Metadata,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=AlterPartitionReassignments,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=4,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=24,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=35,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=43,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=26,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=21,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=43,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=OffsetDelete,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=OfflineReplicaCount,type=ReplicaManager"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=DescribeAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=JoinGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=0,topic=aaa,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=Fetch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=23,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=10,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=40,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=OffsetForLeaderEpoch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=17,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=33,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=8,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=43,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=29,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=DescribeGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=ListOffsets,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=49,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=DescribeUserScramCredentials,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=Metadata,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=CreateDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=39,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=12,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=35,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=CreatePartitions,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:listener=PLAINTEXT,type=socket-server-metrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=28,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=40,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=AlterIsr,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=ListPartitionReassignments,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=41,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=DescribeAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=ClusterId,type=KafkaServer"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=21,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=48,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=45,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=MessageConversionsTimeMs,request=Fetch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=DescribeLogDirs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=OffsetForLeaderEpoch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=ZooKeeperSyncConnectsPerSec,type=SessionExpireListener"
		},
		{
		  "objectName": "kafka.server:delayedOperation=Produce,name=NumDelayedOperations,type=DelayedOperationPurgatory"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=7,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.server:delayedOperation=ElectLeader,name=NumDelayedOperations,type=DelayedOperationPurgatory"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=CreateDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=CreateTopics,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.controller:name=TopicsToDeleteCount,type=KafkaController"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=DescribeGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=13,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.server:clientId=ReplicaAlterLogDirs,name=MaxLag,type=ReplicaAlterLogDirsManager"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=34,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=6,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=39,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=Produce,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=8,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=34,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=39,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=21,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=ListPartitionReassignments,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=TotalProduceRequestsPerSec,topic=bbb,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=38,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=ListGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=max-dirty-percent,type=LogCleanerManager"
		},
		{
		  "objectName": "kafka.server:clientSoftwareName=unknown,clientSoftwareVersion=unknown,listener=PLAINTEXT,networkProcessor=2,type=socket-server-metrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=DescribeConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=48,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=7,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=36,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ExpiredConnectionsKilledCount,type=SocketServer"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=31,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=AlterUserScramCredentials,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=UnderReplicatedPartitions,type=ReplicaManager"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=AddOffsetsToTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=IsrShrinksPerSec,type=ReplicaManager"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=17,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:logDirectory=\\"/tmp/kafka-logs\\",name=LogDirectoryOffline,type=LogManager"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=TxnOffsetCommit,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=EndTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=41,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=19,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=AlterUserScramCredentials,type=RequestMetrics"
		},
		{
		  "objectName": "java.lang:name=G1 Old Gen,type=MemoryPool"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=DeleteAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=0,topic=bbb,type=Log"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=15,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=UpdateMetadata,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:listener=PLAINTEXT,name=AcceptorBlockedPercent,type=Acceptor"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=34,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.server:delayedOperation=Fetch,name=PurgatorySize,type=DelayedOperationPurgatory"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=12,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=43,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=DescribeAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=CreatePartitions,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=DescribeDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=0,topic=bbb,type=Log"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=28,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=36,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.server:name=ReplicationBytesOutPerSec,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=14,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.server:delayedOperation=topic,name=NumDelayedOperations,type=DelayedOperationPurgatory"
		},
		{
		  "objectName": "kafka.server:name=MessagesInPerSec,topic=aaa,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=44,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=OffsetFetch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=WriteTxnMarkers,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=20,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=DescribeUserScramCredentials,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=7,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=26,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=3,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.server:name=ZooKeeperAuthFailuresPerSec,type=SessionExpireListener"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=34,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=ElectLeaders,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=cleaner-recopy-percent,type=LogCleaner"
		},
		{
		  "objectName": "kafka.server:fetcherType=consumer,name=ExpiresPerSec,type=DelayedFetchMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=30,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=JoinGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=14,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "java.nio:name=direct,type=BufferPool"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=SaslAuthenticate,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:clientId=ReplicaAlterLogDirs,name=FailedPartitionsCount,type=ReplicaAlterLogDirsManager"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=UpdateFeatures,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=11,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=30,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=25,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=ElectLeaders,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=0,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=DeleteGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=45,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=32,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.coordinator.group:name=NumGroupsStable,type=GroupMetadataManager"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=CreateDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=10,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=DescribeGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=OffsetDelete,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=IncrementalAlterConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=36,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=InitProducerId,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:type=Fetch"
		},
		{
		  "objectName": "kafka.controller:name=TotalQueueSize,type=ControllerChannelManager"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=20,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=27,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.server:name=FailedIsrUpdatesPerSec,type=ReplicaManager"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=9,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=39,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=DescribeAcls,type=RequestMetrics"
		},
		{
		  "objectName": "java.lang:type=Compilation"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=47,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=AlterUserScramCredentials,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=31,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RequestsPerSec,request=Metadata,type=RequestMetrics,version=9"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=0,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.server:name=BytesOutPerSec,topic=bbb,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=AddPartitionsToTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:error=NONE,name=ErrorsPerSec,request=ApiVersions,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=CreateDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=40,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=20,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=13,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=IncrementalAlterConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=AddOffsetsToTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=InitProducerId,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=DeleteRecords,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=WriteTxnMarkers,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=OfflineLogDirectoryCount,type=LogManager"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=18,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=0,topic=aaa,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=10,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=DescribeAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=31,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:error=LEADER_NOT_AVAILABLE,name=ErrorsPerSec,request=Metadata,type=RequestMetrics"
		},
		{
		  "objectName": "java.lang:name=Compressed Class Space,type=MemoryPool"
		},
		{
		  "objectName": "kafka.network:name=MessageConversionsTimeMs,request=Produce,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=UpdateMetadata,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:type=txn-marker-channel-metrics"
		},
		{
		  "objectName": "kafka.network:name=NetworkProcessorAvgIdlePercent,type=SocketServer"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=AlterConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=19,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=LeaderAndIsr,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=CreateAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=ListGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:delayedOperation=Produce,name=PurgatorySize,type=DelayedOperationPurgatory"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=SaslHandshake,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=42,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=17,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.controller:broker-id=0,name=RequestRateAndQueueTimeMs,type=ControllerChannelManager"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=22,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=14,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=DescribeClientQuotas,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=29,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=8,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=OffsetDelete,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=DescribeGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=46,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=LeaderAndIsr,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=ReassigningPartitions,type=ReplicaManager"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=22,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=22,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=42,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=48,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=JoinGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=16,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=Heartbeat,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:type=group-coordinator-metrics"
		},
		{
		  "objectName": "kafka.server:name=TotalFetchRequestsPerSec,topic=bbb,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=UpdateMetadata,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=TotalProduceRequestsPerSec,topic=__consumer_offsets,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=SaslHandshake,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=4,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=CreateAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=DescribeClientQuotas,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=6,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=8,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=AlterIsr,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=35,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=8,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=34,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=37,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=12,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=SaslHandshake,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=23,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=OffsetDelete,type=RequestMetrics"
		},
		{
		  "objectName": "java.lang:type=OperatingSystem"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=JoinGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=ReplicationBytesInPerSec,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=28,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=LeaveGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=FindCoordinator,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=44,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=OffsetFetch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=32,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=19,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:logDirectory=\\"/tmp/kafka-logs\\",name=uncleanable-partitions-count,type=LogCleanerManager"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueSize,processor=2,type=RequestChannel"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=OffsetDelete,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=20,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=44,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=35,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=7,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=IncrementalAlterConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=BytesOutPerSec,topic=aaa,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=9,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=7,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=CreatePartitions,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=SaslAuthenticate,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=32,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=3,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.server:name=TotalFetchRequestsPerSec,topic=aaa,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=30,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=18,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=Metadata,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=9,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=AddPartitionsToTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=5,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=LeaderAndIsr,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=LeaveGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=21,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=ListPartitionReassignments,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=37,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=27,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=AddOffsetsToTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=OffsetFetch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=AlterClientQuotas,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=8,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "java.lang:name=CodeCacheManager,type=MemoryManager"
		},
		{
		  "objectName": "kafka.coordinator.group:name=NumGroupsEmpty,type=GroupMetadataManager"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=31,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=AddPartitionsToTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:type=ControllerMutation"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=22,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=OffsetFetch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.controller:broker-id=0,name=QueueSize,type=ControllerChannelManager"
		},
		{
		  "objectName": "kafka.server:clientSoftwareName=unknown,clientSoftwareVersion=unknown,listener=PLAINTEXT,networkProcessor=1,type=socket-server-metrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=DescribeUserScramCredentials,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=29,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=SyncGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=16,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.controller:name=EventQueueSize,type=ControllerEventManager"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=42,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=JoinGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=ListGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=33,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.controller:name=PreferredReplicaImbalanceCount,type=KafkaController"
		},
		{
		  "objectName": "kafka.server:name=ReassignmentBytesInPerSec,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=DeleteTopics,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=MessagesInPerSec,topic=bbb,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=3,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=44,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=ApiVersions,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=FetchConsumer,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=FetchFollower,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=EndTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:type=app-info"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=38,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=43,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=0,topic=aaabbb,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=16,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=LeaveGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=DescribeUserScramCredentials,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=17,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RequestsPerSec,request=Produce,type=RequestMetrics,version=8"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=AlterReplicaLogDirs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=SaslAuthenticate,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=FindCoordinator,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=5,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=OffsetFetch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=OffsetFetch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=LeaveGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=45,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=OffsetForLeaderEpoch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=36,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=20,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=TxnOffsetCommit,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestsPerSec,request=ApiVersions,type=RequestMetrics,version=3"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=1,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=30,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=22,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.utils:name=cleaner-io,type=Throttler"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=FindCoordinator,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=38,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=DescribeUserScramCredentials,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=AlterClientQuotas,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=22,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:error=NONE,name=ErrorsPerSec,request=JoinGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=24,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=Heartbeat,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=23,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RequestsPerSec,request=FetchConsumer,type=RequestMetrics,version=12"
		},
		{
		  "objectName": "kafka.controller:name=LeaderElectionRateAndTimeMs,type=ControllerStats"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=CreateDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=32,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=49,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "JMImplementation:type=MBeanServerDelegate"
		},
		{
		  "objectName": "kafka.log:name=time-since-last-run-ms,type=LogCleanerManager"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=47,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=30,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=46,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "java.lang:type=ClassLoading"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=44,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestsPerSec,request=UpdateMetadata,type=RequestMetrics,version=6"
		},
		{
		  "objectName": "kafka.network:name=RequestsPerSec,request=ListOffsets,type=RequestMetrics,version=5"
		},
		{
		  "objectName": "java.lang:name=Metaspace,type=MemoryPool"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=22,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=AddPartitionsToTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=AlterClientQuotas,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=CreateTopics,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=ApiVersions,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=49,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=DeleteTopics,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=ApiVersions,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:broker-id=0,type=controller-channel-metrics"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=49,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=AddOffsetsToTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=Heartbeat,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=AlterUserScramCredentials,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=ListPartitionReassignments,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=DeleteRecords,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=0,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=27,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=23,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=29,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=AlterReplicaLogDirs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=42,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=6,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=24,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=24,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=16,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.controller:name=ActiveControllerCount,type=KafkaController"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=LeaveGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=ExpireDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=7,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=27,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=0,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=AlterClientQuotas,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=1,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=CreateTopics,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=TotalProduceRequestsPerSec,topic=aaa,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=DeleteRecords,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=DescribeLogDirs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=DeleteTopics,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=ControlledShutdown,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=DeleteTopics,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=11,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=29,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=1,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=FetchFollower,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.controller:name=OfflinePartitionsCount,type=KafkaController"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=Fetch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=FetchFollower,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=0,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.server:delayedOperation=Rebalance,name=NumDelayedOperations,type=DelayedOperationPurgatory"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=23,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=ListGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=22,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=26,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=19,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=1,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=41,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.controller:name=TopicsIneligibleToDeleteCount,type=KafkaController"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=AddOffsetsToTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=FindCoordinator,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=SyncGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=Produce,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=0,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=20,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=47,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=26,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=45,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=30,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.controller:name=ControllerShutdownRateAndTimeMs,type=ControllerStats"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=44,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=DeleteGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=FetchConsumer,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=AlterUserScramCredentials,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=DeadThreadCount,type=LogCleaner"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=48,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=Fetch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=43,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=EndTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=25,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=CreateDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=23,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=SaslAuthenticate,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:clientId=ReplicaAlterLogDirs,name=MinFetchRate,type=ReplicaAlterLogDirsManager"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=24,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=48,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "java.util.logging:type=Logging"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=DeleteAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=DeleteAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=46,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=27,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.coordinator.group:name=NumGroupsCompletingRebalance,type=GroupMetadataManager"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=OffsetForLeaderEpoch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ControlPlaneExpiredConnectionsKilledCount,type=SocketServer"
		},
		{
		  "objectName": "kafka.server:name=ReassignmentBytesOutPerSec,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=SaslAuthenticate,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=ListPartitionReassignments,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=IncrementalAlterConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=DeleteGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=AlterReplicaLogDirs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.controller:name=UpdateFeaturesRateAndTimeMs,type=ControllerStats"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=35,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=AddPartitionsToTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=AtMinIsrPartitionCount,type=ReplicaManager"
		},
		{
		  "objectName": "kafka.server:name=TotalProduceRequestsPerSec,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=5,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=15,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "java.lang:name=G1 Eden Space,type=MemoryPool"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=DescribeConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=29,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=10,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=25,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestsPerSec,request=JoinGroup,type=RequestMetrics,version=7"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=FetchConsumer,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=28,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=14,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=42,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=TxnOffsetCommit,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ControlPlaneNetworkProcessorAvgIdlePercent,type=SocketServer"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=EndTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=FindCoordinator,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=18,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=0,topic=aaabbb,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=RenewDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=36,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=15,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=DeleteGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:type=socket-server-metrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=28,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=25,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=EndTxn,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=4,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=ListGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=6,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=10,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=WriteTxnMarkers,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=8,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueSize,type=RequestChannel"
		},
		{
		  "objectName": "kafka.controller:name=LeaderAndIsrResponseReceivedRateAndTimeMs,type=ControllerStats"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=AlterClientQuotas,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=TxnOffsetCommit,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=ControlledShutdown,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=SyncGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:clientId=Replica,name=MaxLag,type=ReplicaFetcherManager"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=26,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.server:name=UnderMinIsrPartitionCount,type=ReplicaManager"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=DeleteAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=15,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=ListGroups,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:type=Produce"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=36,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=CreatePartitions,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=31,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=WriteTxnMarkers,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=AlterIsr,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=13,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=TotalTimeMs,request=RenewDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:error=NONE,name=ErrorsPerSec,request=Metadata,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=40,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=27,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=DescribeConfigs,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=LeaveGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.server:name=TotalFetchRequestsPerSec,topic=aaabbb,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.controller:name=ControllerState,type=KafkaController"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueTimeMs,request=SaslHandshake,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=TemporaryMemoryBytes,request=Fetch,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.controller:name=AutoLeaderBalanceRateAndTimeMs,type=ControllerStats"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=ExpireDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=0,topic=aaa,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=0,topic=aaa,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=LastStableOffsetLag,partition=49,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=37,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.server:name=ZooKeeperDisconnectsPerSec,type=SessionExpireListener"
		},
		{
		  "objectName": "kafka.coordinator.transaction:name=UnknownDestinationQueueSize,type=TransactionMarkerChannelManager"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=LeaveGroup,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=Size,partition=23,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderReplicated,partition=17,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.server:BrokerId=0,type=BrokerToControllerChannel-metrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=6,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=UnderMinIsr,partition=14,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=RenewDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=ControlledShutdown,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ResponseQueueSize,processor=1,type=RequestChannel"
		},
		{
		  "objectName": "kafka.server:name=InvalidMessageCrcRecordsPerSec,type=BrokerTopicMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=24,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestQueueTimeMs,request=RenewDelegationToken,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=DeleteAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=LocalTimeMs,request=CreateAcls,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=49,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=ReplicasCount,partition=49,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=SaslHandshake,type=RequestMetrics"
		},
		{
		  "objectName": "java.lang:type=Memory"
		},
		{
		  "objectName": "kafka.network:name=ResponseSendTimeMs,request=Produce,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=LogEndOffset,partition=2,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=DeleteTopics,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.cluster:name=InSyncReplicasCount,partition=47,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=ThrottleTimeMs,request=ApiVersions,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.network:name=RemoteTimeMs,request=Produce,type=RequestMetrics"
		},
		{
		  "objectName": "kafka.log:name=NumLogSegments,partition=16,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.log:name=LogStartOffset,partition=30,topic=__consumer_offsets,type=Log"
		},
		{
		  "objectName": "kafka.cluster:name=AtMinIsr,partition=28,topic=__consumer_offsets,type=Partition"
		},
		{
		  "objectName": "kafka.network:name=RequestBytes,request=FetchFollower,type=RequestMetrics"
		}
	  ]`;
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
