const express = require("express");
const loginController = require("../controllers/loginController");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const router = express.Router();

router
    .route("/login")
    .get(loginController.traer)
    .post(loginController.crear);

// router
//     .route("/itineraries/:cityId")
//     .get(itinerariesController.traerItinerarioPorCiudad);

module.exports = router;