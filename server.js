var express = require('express')
var app = express()

app.use(express.static('www'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/www/index.html");
})

app.listen(3000, function () {
  console.log('Serwer nasłuchuje na porcie 3000')
})