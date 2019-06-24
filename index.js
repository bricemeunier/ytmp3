var express = require('express');
var app = express();
var fs = require('fs');
var cors = require('cors');
var ytdl = require('ytdl-core');
var port=8080;
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use(cors());

app.get('/download', (req,res) => {
    var URL = req.query.URL;

    res.header('Content-Disposition', 'attachment; filename="son.mp3"');
    ytdl(URL, {
      format: 'mp3'
    })
    .on('error', (err) => console.error)
    .pipe(res);
});

app.listen(port);
console.log(`server runnig on port ${port} : http://localhost:${port}/`);
