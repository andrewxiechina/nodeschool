const http = require('http');
const url = require('url');

const server = http.createServer((req, res) =>{
  var urlInRequest = req.url;
  var urlObj = url.parse(urlInRequest, true);
  var path = urlObj.pathname;
  var query = urlObj.query;
  if(path === '/api/parsetime'){
    var date = new Date(query.iso)
    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(result));
    res.end();
  }else if (path === '/api/unixtime') {
    var date = new Date(query.iso)
    result = {
      unixtime: date.getTime()
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(result));
    res.end();
  }
})

server.listen(process.argv[2]);
