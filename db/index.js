var express = require('express');
var router = express.Router();
var app = express();

var dynamoDB = require('./dynamoDB/index.js');
var MySQL = require('./mysql/index.js');

router.use('/dynamoDB', dynamoDB);
router.use('/mysql', MySQL);

router.use('/', (req, res, next) => {
    res.send("Go to /dynamoDB for dynamoDB\nGo to /mysql for MySQL");
})

module.exports = router;