const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function (req, res) {
  console.log("server 3000 is running")
});

var x = "twenty"
