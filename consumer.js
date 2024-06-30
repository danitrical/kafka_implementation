const { kafka } = require('./client');
const group = process.argv[2];

console.log(process.argv)

const init = async () => {
    const consumer = kafka.consumer({groupId: group});

    console.log('Started Connecting to Consumer.....')
    await consumer.connect();
    console.log('Consumer Connected Successfully.....')


    await consumer.subscribe({topics: ['messages'], fromBeginning: true});

    await consumer.run({
      eachMessage: async ({topic, partition, message, heartbeat, pause}) => {
        console.log(`${group}: [${topic}]: PART: ${partition}`, message.value.toString());
      }
    })

}

init()