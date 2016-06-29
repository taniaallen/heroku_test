var express = require('express');
var app     = express();

app.get('/', function(req,res) {
    res.send('works!');
});



var port = process.env.PORT || 3000;

app.listen(port, process.env.IP, function() {
    console.log('listening on port ' + process.env.PORT);
});