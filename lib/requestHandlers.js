const exec = require('child_process').exec;

function start() {
  console.log('Request handler \'start\' was called.');
  const content = 'empty';
  // non-blocking operation: exec()
  exec('ls -lah', function(arror, stdout, stderr) {
    content = stdout;
  });

  return content;
}

function upload() {
  console.log('Request handler \'upload\' was called.');
  return 'Hellot Upload';
}

exports.start = start;
exports.upload = upload;
