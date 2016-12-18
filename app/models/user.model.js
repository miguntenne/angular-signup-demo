var mongoose = require('mongoose');
var crypto = require('crypto');

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  authy_id: String,
  password: {
    type: String,
    required: true
  }
});

/**
* This method uses Node.js built in module crypto to hash the password and save it. Crypto creates a new hash instance
* of SHA256, updates the hash content with password and digests that data using base64 encoding.
*/
userSchema.methods.encryptPassword = function(password) {
  this.password = crypto.createHash('sha256').update(password).digest('base64').toString();
};

/**
* This method takes a password, convert it to a hash value and then compares it with the hash pass already
* assigned to the user.
*/
userSchema.methods.validatePassword = function(password) {
  var hashedPassword = crypto.createHash('sha256').update(password).digest('base64').toString();
  return this.password === hashedPassword;
};

module.exports = mongoose.model('User', userSchema);
