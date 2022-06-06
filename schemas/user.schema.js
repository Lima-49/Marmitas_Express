const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  phone: String,
  adress: String,
  pedidos: String,

  create_date: {
    type: Date,
    default: Date.now,
  },

  update_date: {
    type: Date,
    default: Date.now,
  },
});

const User = (module.exports = mongoose.model("user", userSchema));

module.exports.get = function (callback, limit) {
  User.find(callback).limit(limit);
};
