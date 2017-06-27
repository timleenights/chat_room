var http = require('http');
var fs = require('fs');
var extract = require('./extract.js');

var handlerError = function (error, response) {
  response.writeHead(404);
  response.end('<h1>404, Not found !!!</h1>');
}

var server = http.createServer(function (request, response) {
  console.log('Responding to a request');
  // res.end('<h1>Hello, World!</h1>');

  var filePath = extract(request.url);

  fs.readFile(filePath, function (error, data) {
    if (error) {
      handlerError(error, response);
      return;
    } else {
      response.end(data);
    }
  });
});

server.listen(3000);