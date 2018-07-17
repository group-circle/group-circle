var express = require('express');
var router = express.Router();
var path = require('path');
var firebase = require("../src/Firebase");

/* GET home page. */
router.get('/', function(req, res, next) {
  var result = firebase.get();
  result.then(function (r) {
    console.log(r.val());
  });
  res.sendFile(path.join(__dirname + '/../public/html/index.html'));
});

module.exports = router;
