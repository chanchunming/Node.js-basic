var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
    res.send("MySQL is Under Construction")
})

module.exports = router;