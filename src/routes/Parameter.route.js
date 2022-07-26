var express = require("express");
var router = express.Router();
const Parameter = require("../controller/Parameter.controller");
router.get("/", Parameter.get);
router.get("/:id", Parameter.get);

router.post("/", Parameter.post);
router.post("/:id", Parameter.post);

router.put("/", Parameter.put);
router.put("/:id", Parameter.put);

router.delete("/", Parameter.delete);
router.delete("/:id", Parameter.delete);
module.exports = router;