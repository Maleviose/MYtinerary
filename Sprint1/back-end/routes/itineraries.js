const express = require("express");
const itinerariesController = require("../controllers/itinerariesController");
const router = express.Router();

router
    .route("/itineraries")
    .get(itinerariesController.traer)
    .post(itinerariesController.crear);
router
    .route("/itineraries/:id")
    .delete(itinerariesController.borrar)
    .put(itinerariesController.modificar);
module.exports = router;