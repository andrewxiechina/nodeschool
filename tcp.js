const net = require('net');
const server = net.createServer((socket) => {
  // 'connection' listener
  function zeroFill (i) {
    return (i < 10 ? '0' : '') + i
  }

  function now () {
    var d = new Date()
    return d.getFullYear() + '-' +
      zeroFill(d.getMonth() + 1) + '-' +
      zeroFill(d.getDate()) + ' ' +
      zeroFill(d.getHours()) + ':' +
      zeroFill(d.getMinutes())
  }

  socket.end(now() + "\n");
});


server.listen(process.argv[2], () => {
});
