const topicConfig = {
  topic: 'messages',
  numPartitions: 2,
}

const init = async () => {
  const admin = kafka.admin();
  console.log('Start connecting to admin...')
  admin.connect()
  console.log('Successfully Connected to Kafka...')

  await admin.createTopics({
    topics: [topicConfig]
  })

  console.log('Topic created successfully...')
  console.log('Start disconnecting admin...')

  await admin.disconnect()
  console.log('Successfully Disconnected the admin...')
}

init();