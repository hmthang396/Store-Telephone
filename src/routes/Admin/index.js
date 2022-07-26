var express = require("express");
var router = express.Router();
const Product = require("./Product.route");
const Option = require("./Option.route");
const Color = require("./Color.route");
const Parameter = require("./Parameter.route");
const PrdCol = require("./PrdCol.route");
const PrdOpt = require("./PrdOpt.route");
router.get("/", async(req, res) => {
    res.render("Admin/Dashboard.ejs");
});
router.use("/Product", Product);
router.use("/Color", Color);
router.use("/Option", Option);
router.use("/Parameter", Parameter);
router.use("/PrdCol", PrdCol);
router.use("/PrdOpt", PrdOpt);
module.exports = router;