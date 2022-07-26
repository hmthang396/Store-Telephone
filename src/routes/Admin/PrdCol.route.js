var express = require("express");
const multer = require("multer");
const path = require("path");
express().set("view engine", "ejs");
var router = express.Router();
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
// Product & Image
router.get("/", PrdCol.get);
router.get("/:id", PrdCol.getById);
router.post(
    "/",
    upload.fields([
        { name: "file-input1", maxCount: 1 },
        { name: "file-input2", maxCount: 1 },
        { name: "file-input3", maxCount: 1 },
        { name: "file-input4", maxCount: 1 },
    ]),
    PrdCol.post
);
router.post(
    "/:id",
    upload.fields([
        { name: "file-input1", maxCount: 1 },
        { name: "file-input2", maxCount: 1 },
        { name: "file-input3", maxCount: 1 },
        { name: "file-input4", maxCount: 1 },
    ]),
    PrdCol.postById
);
router.get("/Destroy/:id", PrdCol.delete);
module.exports = router;