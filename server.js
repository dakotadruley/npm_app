const http = require('http');
const url = require('url');

// pass the createServer function an anonymous function
function start(route, handle) {
  function onRequest(req, res) {
    const pathName = url.parse(req.url).pathName;
    console.log('Request for ' + pathName + ' recieved.');
    
    route(handle, pathName);
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World :)');
    res.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started.');

}

exports.start = start;
