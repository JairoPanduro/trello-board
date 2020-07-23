const crypto = require('crypto');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password : String, 
  salt : String,
  token : String,
  created: {
    type: Date,
    default: Date.now
  },
});

UserSchema.methods.setPassword = function(password) { 
  this.salt = crypto.randomBytes(16).toString('hex'); 
  this.token = crypto.randomBytes(16).toString('hex'); 
  this.password = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`); 
};

UserSchema.methods.validatePassword = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`); 
  return this.password === hash; 
}


module.exports = Item = mongoose.model('user', UserSchema);