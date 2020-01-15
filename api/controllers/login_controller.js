var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next) {
  res.render('login', { 
    title: 'Ingresar', 
    message_color: '',
    message: '',
  });
});

router.post('/',async function(req, res, next) {
  var user = req.body.user;
  var password = req.body.pass;
  var exist = await User.count({
    where: {
      user: user,
      password: password
    }
  });
  if(exist == 1){
    res.redirect('/');
  }else{
    res.render('login', { 
      title: 'Ingresar', 
      message_color: 'text-danger',
      message: 'Usuario y/o contraseña no válidos',
    });
  }
});

module.exports = router;