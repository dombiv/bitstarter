var express = require('express');
var app = express();
app.use(express.logger());

asdapp.get('/', function(reques 2 2t, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
