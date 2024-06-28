const { Kafka } = require("kafkajs");

exports.kafka = new Kafka(
  {
    brokers: ['localhost:29092'],
    clientId: 'kafka-implementation'
  }
)