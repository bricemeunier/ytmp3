var http = require('http');
var fs = require('fs');

function onRequest(request,res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('./index.html', null, function(error,data) {
    if (error) {
      res.writeHead(404);
      res.write('error 404');
    }
    else res.write(data);
    res.end();
  });
}

http.createServer(onRequest).listen(8080);
