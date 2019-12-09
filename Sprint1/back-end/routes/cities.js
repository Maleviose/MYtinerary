const express = require("express");
const citiesController = require("../controllers/citiesController");
const router = express.Router();

router
    .route("/cities")
    .get(citiesController.listarCities)
    .post(citiesController.cargarCities);
router
    .route("/cities/:id")
    .delete(citiesController.borrarCities)
    .put(citiesController.modificarCities);
module.exports = router;