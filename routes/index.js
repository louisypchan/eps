var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EPS - A Simple, Powerful HTML5 Maker' });
});

module.exports = router;
