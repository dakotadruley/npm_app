const http = require('http');

// pass the createServer function an anonymous function
function onRequest(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World :)');
  res.end();
}

http.createServer(onRequest).listen(8888);
