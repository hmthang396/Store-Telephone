var express = require("express");
const multer = require("multer");
const path = require("path");
express().set("view engine", "ejs");
var router = express.Router();
const Product = require("../../controller/Admin/Product.controller");
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
// Product
router.get("/", Product.get);
router.get("/All", Product.getAllElement);
router.get("/:id", Product.getById);
router.post("/", upload.single("Storage"), Product.post);
router.post("/:id", upload.single("Storage"), Product.postById);
router.get("/Destroy/:id", Product.delete);
module.exports = router;