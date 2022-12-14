
const express = require("express");
const gendersControllers = require("../../controllors/genders.controller");
const router = express.Router();

router 
.route("/")

.get(gendersControllers.getAllGenders)

.post(gendersControllers.saveAGenders)

module.exports = router;