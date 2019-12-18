const mongoose = require("mongoose");
const loginSchema = new mongoose.Schema({
    mail: { type: String, required: true }, //default: algo
    password: { type: String, required: true }
});
const Login = mongoose.model("login", loginSchema);

module.exports = Login;