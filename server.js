const http = require('http');
const url = require('url');

// pass the createServer function an anonymous function
function start(route, handle) {
  function onRequest(req, res) {
    const postData = '';
    const pathName = url.parse(req.url).pathName;
    console.log('Request for ' + pathName + ' recieved.');
    
    req.setEncoding('utf8');

    req.addListener('data', function(postDataChunk) {
      postData += postDataChunk;
      console.log('Recieved POST data chunk \'' +
      postDataChunk + '\' .');
    });

    req.addListener('end', function() {
      route(handle, pathName, res, postData);
    });
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started.');

}

exports.start = start;
