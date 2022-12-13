var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
    res.send("MongoDB is Under Construction")
})

module.exports = router;