var express = require("express");
const path = require("path");
express().set("view engine", "ejs");
var router = express.Router();
const Color = require("../../controller/Admin/Color.controller");
// Color
router.get("/", Color.get);
router.get("/All", Color.getAllElement);
router.get("/:id", Color.getById);
router.post("/", Color.post);
router.post("/:id", Color.postById);
router.get("/Destroy/:id", Color.delete);
module.exports = router;