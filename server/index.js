var express = require('express');
var app = express();

/**
 * Статика
 */
app.use('/static', express.static(__dirname + '../dist/'));

app.get('/', function (req, res) {
    res.send('Test');
});

app.listen(3000, function () {
    console.log(__dirname + '/dist/');
    console.log('Example app listening on port 3000!');
});