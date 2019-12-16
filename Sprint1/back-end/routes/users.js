const express = require("express");
const usersController = require("../controllers/usersController.js");
const router = express.Router();

router
    .route("/users")
    .get(usersController.traerTodos)
    .post(usersController.registrar);

module.exports = router;