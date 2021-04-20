const mongoose = require('mongoose');
//const bcrypt = require('bcryptjs');

const UserSessionSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: ''
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
  isDeleted: {
    type: Boolean,
    default: false
  }

  // name: {
  //   type: String,
  //   required: true
  // },
  // password: {
  //   type: String,
  //   default: ""
  // }

});


module.exports = mongoose.model('UserSession', UserSessionSchema);