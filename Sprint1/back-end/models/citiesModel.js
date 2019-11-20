const mongoose = require("mongoose");
const citySchema = new mongoose.Schema({
  ciudad: { type: String, required: true }, //default: algo
  pais: { type: String, required: true }
});
const City = mongoose.model("city", citySchema);

module.exports = City;
