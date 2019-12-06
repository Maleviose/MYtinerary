const express = require("express");
const itinerariesController = require("../controllers/itinerariesController");
const router = express.Router();

router
  .route("/itinerary")
  .get(itinerariesController.traerIntinerary)
  .post(itinerariesController.crearIntinerary)
  .delete(itinerariesController.borrarIntinerary)
  .put(itinerariesController.modificarIntinerary);
module.exports = router;
