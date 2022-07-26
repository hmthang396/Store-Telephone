var express = require("express");
var router = express.Router();
const Option = require("../controller/Option.controller");
router.get("/", Option.get);
router.get("/:id", Option.get);

router.post("/", Option.post);
router.post("/:id", Option.post);

router.put("/", Option.put);
router.put("/:id", Option.put);

router.delete("/", Option.delete);
router.delete("/:id", Option.delete);
module.exports = router;