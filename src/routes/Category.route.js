var express = require("express");
var router = express.Router();
const Category = require("../controller/Category.controller");
router.get("/Category", Category.get);

router.post("/Category", Category.post);
router.post("/Category/:id", Category.post);

router.put("/Category", Category.put);
router.put("/Category/:id", Category.put);

router.delete("/Category", Category.delete);
router.delete("/Category/:id", Category.delete);
module.exports = router;