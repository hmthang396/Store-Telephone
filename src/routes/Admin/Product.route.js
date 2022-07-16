var express = require("express");
const multer = require("multer");
const path = require("path");
express().set("view engine", "ejs");
var router = express.Router();
const Product = require("../../controller/Admin/Product.controller");
const Parameter = require("../../controller/Admin/Parameter.controller");
const Color = require("../../controller/Admin/Color.controller");
const Option = require("../../controller/Admin/Option.controller");
const PrdOpt = require("../../controller/Admin/Prd_Opt.controller");
const PrdCol = require("../../controller/Admin/Prd_Col.controller");
//File img
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        try {
            const imagePath = path.join(__dirname, "../../public/Image");
            cb(null, imagePath);
        } catch (err) {
            console.log(err);
        }
    },
    filename: function(req, file, cb) {
        try {
            cb(null, Date.now() + "." + file.originalname.split(".")[1]);
        } catch (err) {
            console.log(err);
        }
    },
});
var upload = multer({ storage: storage });
//
router.get("/", async(req, res) => {
    res.render("Admin/Dashboard.ejs");
});
// Product
router.get("/Product", Product.get);
router.get("/Product/All", Product.getAllElement);
router.get("/Product/:id", Product.getById);
router.post("/Product", upload.single("Storage"), Product.post);
router.post("/Product/:id", upload.single("Storage"), Product.postById);
router.get("/Product/Destroy/:id", Product.delete);
// Parameter
router.get("/Parameter", Parameter.get);
router.get("/Parameter/All", Parameter.getAllElement);
router.get("/Parameter/:id", Parameter.getById);
router.post("/Parameter", Parameter.post);
router.post("/Parameter/:id", Parameter.postById);
router.get("/Parameter/Destroy/:id", Parameter.delete);
// Color
router.get("/Color", Color.get);
router.get("/Color/All", Color.getAllElement);
router.get("/Color/:id", Color.getById);
router.post("/Color", Color.post);
router.post("/Color/:id", Color.postById);
router.get("/Color/Destroy/:id", Color.delete);
// Option
router.get("/Option", Option.get);
router.get("/Option/All", Option.getAllElement);
router.get("/Option/:id", Option.getById);
router.post("/Option", Option.post);
router.post("/Option/:id", Option.postById);
router.get("/Option/Destroy/:id", Option.delete);
// Product & Option
router.get("/PrdOpt", PrdOpt.get);
router.get("/PrdOpt/:id", PrdOpt.getById);
router.post("/PrdOpt", PrdOpt.post);
router.post("/PrdOpt/:id", PrdOpt.postById);
router.get("/PrdOpt/Destroy/:id", PrdOpt.delete);
// Product & Image
router.get("/PrdCol", PrdCol.get);
router.get("/PrdCol/:id", PrdCol.getById);
router.post(
    "/PrdCol",
    upload.fields([
        { name: "file-input1", maxCount: 1 },
        { name: "file-input2", maxCount: 1 },
        { name: "file-input3", maxCount: 1 },
        { name: "file-input4", maxCount: 1 },
    ]),
    PrdCol.post
);
router.post(
    "/PrdCol/:id",
    upload.fields([
        { name: "file-input1", maxCount: 1 },
        { name: "file-input2", maxCount: 1 },
        { name: "file-input3", maxCount: 1 },
        { name: "file-input4", maxCount: 1 },
    ]),
    PrdCol.postById
);
router.get("/PrdCol/Destroy/:id", PrdCol.delete);
module.exports = router;