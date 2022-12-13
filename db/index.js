var express = require('express');
var router = express.Router();
var app = express();

var MongoDB = require('./mongodb/index.js');
var MySQL = require('./mysql/index.js');

router.get('/mongodb', MongoDB);
router.get('/mysql', MySQL);

router.get('/', (req, res, next) => {
    res.send("Go to /mongodb for MongoBD\nGo to /mysql for MySQL");
})

module.exports = router;