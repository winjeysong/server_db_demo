var mongoose = require('mongoose');

// 创建UserSchema
var UsersSchema = new mongoose.Schema({
  name: String,
  paw: String,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    upDateAt: {
      type: Date,
      default: Date.now()
    }
  }
});

// 每次都会调用，更新时间
UsersSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.upDateAt = Date.now();
  } else {
    this.meta.upDateAt = Date.now();
  }

  next();
});

// 静态方法：查询
UsersSchema.statics = {
  fetch: function (cb) {
    return this
      .find()
      .sort('meta.updateAt')
      .exec(cb);
  },
  findById: function (id, cb) {
    return this
      .findOne({ _id: id })
      .exec(cb);
  }
};

module.exports = UsersSchema;
