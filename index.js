// set variables for environment
var express = require('express');
var app = express();
var path = require('path');

//TODO put routes here BEFORE app.listen
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/about', function (req, res) {
  res.send('about')
})

// Set server port
app.listen(4000);
console.log('server is running');
