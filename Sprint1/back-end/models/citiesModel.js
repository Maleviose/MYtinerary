const mongoose = require('mongoose')
const citySchema = new mongoose.Schema({
    nombre: { type: String, required: true } //default: algo

})
const Cities = mongoose.model('city', citySchema)

module.exports = Cities