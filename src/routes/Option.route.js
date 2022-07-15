var express = require("express");
var router = express.Router();
const Option = require("../controller/Option.controller");
router.get("/Option", Option.get);
router.get("/Option/:id", Option.get);

router.post("/Option", Option.post);
router.post("/Option/:id", Option.post);

router.put("/Option", Option.put);
router.put("/Option/:id", Option.put);

router.delete("/Option", Option.delete);
router.delete("/Option/:id", Option.delete);
module.exports = router;