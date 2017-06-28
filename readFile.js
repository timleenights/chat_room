var fs = require('fs');
var handlerError = require('./handlerError.js');

var readFile = function (filePath, response) {
  fs.readFile(filePath, function (error, data) {
    if (error) {
      handlerError(error, response);
      return;
    } else {
      response.setHeader('Content-Type', 'text/html');
      response.end(data);
    }
  });
};

module.exports = readFile;