const io = require('socket.io-client')

// let's generate 100 concurrent connection to 'https://state.senstar.net/state'
for (let i = 0; i < 10000; i++) {
  (function (counter) {
    const socket = io.connect('https://state.sensestar.net/state', {
      transports: ['websocket']
    })

    socket.on('connect', () => {
      console.log(`socket connected! ${counter}`)
    })

    socket.on('news', data => {
      console.log('BRYAN DEBUG, data', data)
    })
  })(i)
}

require('net').createServer().listen();
