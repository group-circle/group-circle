var express = require('express');
// var path = require('path');
var simpleRepository = require("../src/SimpleRepository");
var router = express.Router();

router.get('/firebase' ,async function(req, res, next) {
    const data = {
        "lambeosaurus": {
            "height" : 2.1,
            "length" : 12.5,
            "weight": 5000
        },
        "stegosaurus": {
            "height" : 4,
            "length" : 9,
            "weight" : 2500
        }
    }
    simpleRepository.add("dinosaur", data);
    const r = await simpleRepository.get()
    res.send(r.val())
});

module.exports = router;