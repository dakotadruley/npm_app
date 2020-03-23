const http = require('http');

// pass the createServer function an anonymous function
function start() {
  function onRequest(req, res) {
    console.log('Request recieved.');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World :)');
    res.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started.');

}

exports.start = start;
