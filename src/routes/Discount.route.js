var express = require("express");
var router = express.Router();
const Discount = require("../controller/Discount.controller");
router.get("/Discount", Discount.get);
router.get("/Discount/:id", Discount.get);

router.post("/Discount", Discount.post);
router.post("/Discount/:id", Discount.post);

router.put("/Discount", Discount.put);
router.put("/Discount/:id", Discount.put);

router.delete("/Discount", Discount.delete);
router.delete("/Discount/:id", Discount.delete);
module.exports = router;