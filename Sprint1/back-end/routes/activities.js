const express = require("express");
const activitiesController = require("../controllers/activitiesController");
const router = express.Router();

router
    .route("/activities")
    .get(activitiesController.traer)
    .post(activitiesController.crear);

// router
//     .route("/itineraries/:cityId")
//     .get(itinerariesController.traerItinerarioPorCiudad);

module.exports = router;