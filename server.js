var http = require('http');
var path = require('path');

var express = require('express');
var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'app')));
router.use('/bower_components', express.static(path.resolve(__dirname, 'bower_components')));


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("server listening at", addr.address + ":" + addr.port);
});
