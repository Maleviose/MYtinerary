const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    mail: { type: String, required: true }, //default: algo
    password: { type: String, required: true },
    userPic: { type: String, required: true }

});
const User = mongoose.model("user", userSchema);

module.exports = User;