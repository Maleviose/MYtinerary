const mongoose = require("mongoose");
const itinerarySchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    picURL: { type: String, required: true }, //default: algo
    rating: { type: Number, required: true },
    duration: { type: Number, required: true },
    hashtags: { type: String },
    cityId: { type: mongoose.Schema.Types.ObjectId, ref: "city" }

});
const Itinerary = mongoose.model("itinerary", itinerarySchema);

module.exports = Itinerary;