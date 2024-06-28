const { kafka } = require('./client');
const readline  = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const init = async () => {
    const producer = kafka.producer();

    console.log('Producer Connecting.....')
    await producer.connect();
    console.log('Producer Connected Successfully.....')


    // Will be using command line to get the message to produce
    rl.setPrompt('> ');
    rl.prompt();

    await rl.on('line', async function (line) {
      const [name, message, loc] = line.split(' ');
      await producer.send({
        topic: 'messages',
        messages: [{
          partition: loc.toLowerCase() === '1' ? 0 : 1,
          key: 'data_update', value: JSON.stringify({name, msg: message, loc: `group_${loc}`})
        }]
      })
      
    }).on('close', async () => {
      producer.disconnect()
    })

}

init()