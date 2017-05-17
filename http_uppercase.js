var http = require('http');
var map = require('through2-map');
var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' })  

  req.pipe(map((chunk) => {
    return chunk.toString().toUpperCase();
  })).pipe(res);
})

server.listen(Number(process.argv[2]))
