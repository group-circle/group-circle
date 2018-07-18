var express = require('express');
// var path = require('path');
var simpleRepository = require("../src/SimpleRepository");
var router = express.Router();

router.get('/firebase',async function(req, res, next) {
    const r = await simpleRepository.get()
    res.send(r.val())
});

module.exports = router;