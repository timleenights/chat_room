var http = require('http');
var extract = require('./extract.js');
var handlerError = require('./handlerError.js');
var readFile = require('./readFile.js');

var server = http.createServer(function (request, response) {
  console.log('Responding to a request');

  var filePath = extract(request.url);

  readFile(filePath, response);
});

server.listen(3000);