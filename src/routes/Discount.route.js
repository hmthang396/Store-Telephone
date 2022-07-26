var express = require("express");
var router = express.Router();
const Discount = require("../controller/Discount.controller");
router.get("/", Discount.get);
router.get("/:id", Discount.get);

router.post("/", Discount.post);
router.post("/:id", Discount.post);

router.put("/", Discount.put);
router.put("/:id", Discount.put);

router.delete("/", Discount.delete);
router.delete("/:id", Discount.delete);
module.exports = router;