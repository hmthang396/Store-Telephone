var express = require("express");
const path = require("path");
express().set("view engine", "ejs");
var router = express.Router();
const Parameter = require("../../controller/Admin/Parameter.controller");

// Parameter
router.get("/", Parameter.get);
router.get("/All", Parameter.getAllElement);
router.get("/:id", Parameter.getById);
router.post("/", Parameter.post);
router.post("/:id", Parameter.postById);
router.get("/Destroy/:id", Parameter.delete);
module.exports = router;