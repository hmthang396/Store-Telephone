var express = require("express");
var router = express.Router();
const Product = require("../controller/Product.controller");
router.get("/", Product.get);
router.get("/:id", Product.get);

router.get("/Category/:categoryId", Product.getByCategoryId);

router.post("/", Product.post);
router.post("/:id", Product.post);

router.put("/", Product.put);
router.put("/:id", Product.put);

router.delete("/", Product.delete);
router.delete("/:id", Product.delete);
module.exports = router;