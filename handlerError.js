var fs = require('fs');

var handlerError = function (error, response) {
  response.writeHead(404);
  fs.readFile('./app/404.html', function (error, data) {
    if (error) throw error;
    response.end(data);
  });
}

module.exports = handlerError;