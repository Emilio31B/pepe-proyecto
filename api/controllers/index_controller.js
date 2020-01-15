var express = require('express');
var middlewareSessionTrue = require('../middlewares/session_true');
var router = express.Router();

router.get('/', middlewareSessionTrue, function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index', { title: 'Express' });
});

module.exports = router;
