var express = require('express');
var router = express.Router();


/* GET home page. I NEED ME A MUNCH */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Simple Application" });
});


module.exports = router;
