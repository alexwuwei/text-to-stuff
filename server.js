var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
  console.log('new request:', req.url);
  res.sendFile(__dirname + '/public/index.html' )
})

app.listen(3000, function() {
  console.log('server started on port 3000');
})
