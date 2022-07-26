var express = require("express");
const multer = require("multer");
const path = require("path");
express().set("view engine", "ejs");
var router = express.Router();
const PrdOpt = require("../../controller/Admin/Prd_Opt.controller");
// Product & Option
router.get("/", PrdOpt.get);
router.get("/:id", PrdOpt.getById);
router.post("/", PrdOpt.post);
router.post("/:id", PrdOpt.postById);
router.get("/Destroy/:id", PrdOpt.delete);
module.exports = router;