var express = require('express');
var Users = require('../models/users');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 查询所有用户数据
router.get('/users', function(req, res, next) {
  Users.fetch(function(err, users) {
    if(err) {
      console.log(err);
    }
    res.render('users',{title: '用户列表', users: users});
  });
});

module.exports = router;
