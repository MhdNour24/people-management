const express = require('express');
const router = express.Router();

// controllers
const allControllers = require("../controllers/person.controller")

router.get("/",allControllers.getAllPeople)
router.post("/",allControllers.createPerson)

router.delete("/:personId",allControllers.deletePerson)

router.patch("/:personId",allControllers.editPerson)

module.exports = router;
