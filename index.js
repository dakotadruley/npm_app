const server = require('./server.js');
const router = require('./lib/router.js');
const requestHandlers = require('./lib/requestHandlers.js');

const handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.start(router.route);
