var express = require('express');
var path = require('path');
var logger = require('morgan');
var app = express();

require('dotenv').config();
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist/angular-with-node')));

//app.use('/', express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/angular-with-node'));
});

var port = normalizePort(process.env.PORT || '4000');
app.listen(port, (req, res) => {
    console.log(`app running in port ${port}`);
});



function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
}