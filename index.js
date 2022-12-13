var express = require('express');
const router = require('./db/index.js');
var app = express();

var dbRoute = require('./db/index.js');

app.use('/db', dbRoute);

app.get('/', (req, res, next) => {
    res.send("Go to /db for database");
})


var server = app.listen(50001, function () {
    console.log("Listening port %s for API", server.address().port)
})