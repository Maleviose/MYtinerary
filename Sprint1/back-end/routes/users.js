const express = require("express");
const usersController = require("../controllers/createUsersController.js");
const router = express.Router();

router
  .route("/users")
  .get(usersController.traerTodos)
  .post(usersController.registrar);

module.exports = router;
