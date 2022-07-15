var express = require("express");
var router = express.Router();
const Color = require("../controller/Color.controller");
router.get("/Color", Color.get);
router.get("/Color/:id", Color.get);

router.post("/Color", Color.post);
router.post("/Color/:id", Color.post);

router.put("/Color", Color.put);
router.put("/Color/:id", Color.put);

router.delete("/Color", Color.delete);
router.delete("/Color/:id", Color.delete);
module.exports = router;