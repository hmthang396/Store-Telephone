var express = require("express");
const path = require("path");
express().set("view engine", "ejs");
var router = express.Router();
const Option = require("../../controller/Admin/Option.controller");
// Option
router.get("/", Option.get);
router.get("/All", Option.getAllElement);
router.get("/:id", Option.getById);
router.post("/", Option.post);
router.post("/:id", Option.postById);
router.get("/Destroy/:id", Option.delete);
module.exports = router;