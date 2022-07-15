var express = require("express");
var router = express.Router();
const Parameter = require("../controller/Parameter.controller");
router.get("/Parameter", Parameter.get);
router.get("/Parameter/:id", Parameter.get);

router.post("/Parameter", Parameter.post);
router.post("/Parameter/:id", Parameter.post);

router.put("/Parameter", Parameter.put);
router.put("/Parameter/:id", Parameter.put);

router.delete("/Parameter", Parameter.delete);
router.delete("/Parameter/:id", Parameter.delete);
module.exports = router;