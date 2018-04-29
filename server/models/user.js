const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
},{usePushEach: true});

UserSchema.plugin(mongooseUniqueValidator);
/*
UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email']);
};
*/

UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();
  console.log(userObject);
  return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

  //  MongoError: Unknown modifier: $pushAll  Mongodb 3.6 doesnot 
  user.tokens.push({access, token});
  console.log("===========");
  console.log(user);
  

  return user.save().then(() => {
    console.log("*******")
    console.log(user);
    return token;
  });
};

UserSchema.statics.findByToken = function(token) {
    var User = this;
    var decoded;

    try{
      decoded = jwt.verify(token,'abc123');
    }catch (e){
      return Promise.reject();
    }

    return User.findOne({
      '_id' : decoded._id,
      'tokens.token' : token,
      'tokens.access' : 'auth'
    });
};


var User = mongoose.model('User', UserSchema);

module.exports = {User}
