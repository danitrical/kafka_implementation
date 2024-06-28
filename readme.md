# Kafka Implementation:

## ZOOKEEPER Container: @Port:2181
### It helps manage the internal partitions and  auto scaling inside kafka
```
docker run -p 2181:2181 zookeeper
```

Note: Zookeeper is used by Kafka internally.

## Kafka Container: @Port:9092
```
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<YOUR_IP_ADDRESS>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<YOUR_IP_ADDRESS>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

### Docker Image Name: 
```
confluentinc/cp-kafka
```

### Before Running
```
yarn install
```
Admin = To setup infrastructure like brokers, topics, partitions, producers, consumers etc.
Producer = To Produce Messages to Kafka
Consumer = To Consume Messages