var express = require("express");
var router = express.Router();
const Category = require("../controller/Category.controller");
router.get("/", Category.get);

router.post("/", Category.post);
router.post("/:id", Category.post);

router.put("/", Category.put);
router.put("/:id", Category.put);

router.delete("/", Category.delete);
router.delete("/:id", Category.delete);
module.exports = router;