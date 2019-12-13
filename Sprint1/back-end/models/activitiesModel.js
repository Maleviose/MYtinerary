const mongoose = require("mongoose");
const activitySchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    itineraryId: { type: mongoose.Schema.Types.ObjectId, ref: "itinerary" }

});
const Activity = mongoose.model("activity", activitySchema);

module.exports = Activity;