const express = require("express");
const citiesController = require("../controllers/citiesController");
const router = express.Router();
const passport = require('../passport')


router
.route("/cities")
//.get(citiesController.listarCities)
.post(citiesController.cargarCities);

router.get("/prueba", passport.authenticate("jwt", { session: false }), citiesController.listarCities);
    
router
    .route("/cities/:id")
    .delete(citiesController.borrarCities)
    .put(citiesController.modificarCities);



module.exports = router;