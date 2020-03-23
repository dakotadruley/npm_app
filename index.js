const server = require('./server.js');
const router = require('./lib/router.js');

server.start(router.route);
