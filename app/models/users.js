var mongoose = require('mongoose');
var UsersSchema = require('../schemas/users');
var Users = mongoose.model('Users', UsersSchema);  // 编译生成Users model

module.exports = Users;
