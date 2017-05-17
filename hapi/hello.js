var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
  path: '/{name}',
  method: 'GET',
  handler: function(reqest, reply) {
    reply("Hello " + reqest.params.name);
  }
});

server.start((err) => {
    if (err) throw err;
});
