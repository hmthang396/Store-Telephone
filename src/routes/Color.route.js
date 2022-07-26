var express = require("express");
var router = express.Router();
const Color = require("../controller/Color.controller");
router.get("/", Color.get);
router.get("/:id", Color.get);

router.post("/", Color.post);
router.post("/:id", Color.post);

router.put("/", Color.put);
router.put("/:id", Color.put);

router.delete("/", Color.delete);
router.delete("/:id", Color.delete);
module.exports = router;