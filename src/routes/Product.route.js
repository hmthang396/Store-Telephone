var express = require("express");
var router = express.Router();
const Product = require("../controller/Product.controller");
router.get("/Product", Product.get);
router.get("/Product/:id", Product.get);

router.get("/Product/Category/:categoryId", Product.getByCategoryId);

router.post("/Product", Product.post);
router.post("/Product/:id", Product.post);

router.put("/Product", Product.put);
router.put("/Product/:id", Product.put);

router.delete("/Product", Product.delete);
router.delete("/Product/:id", Product.delete);
module.exports = router;