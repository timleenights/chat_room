var http = require('http');
var fs = require('fs');
var extract = require('./extract.js');
var handlerError = require('./handlerError.js');

var server = http.createServer(function (request, response) {
  console.log('Responding to a request');

  var filePath = extract(request.url);

  fs.readFile(filePath, function (error, data) {
    if (error) {
      handlerError(error, response);
      return;
    } else {
      response.setHeader('Content-Type', 'text/html');
      response.end(data);
    }
  });
});

server.listen(3000);