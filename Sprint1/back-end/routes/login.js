const express = require("express");
const loginController = require("../controllers/loginController");
const jwt = require("jsonwebtoken");
const router = express.Router();

router
    .route("/login")
    .post(loginController.ingresar);

// router
//     .route("/itineraries/:cityId")
//     .get(itinerariesController.traerItinerarioPorCiudad);

module.exports = router;