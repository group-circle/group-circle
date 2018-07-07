var express = require('express');
var router = express.Router();
var path = require('path');


console.log("GET home page.")
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("GET HOME " + __dirname)
  res.sendFile(path.join(__dirname + '/../public/html/index.html'));
});

module.exports = router;
