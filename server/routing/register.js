const express = require("express");
const router = express.Router();

var {
  insertdata,
  checkdata,
  getdata,
} = require("../controller/registerController");

router.post("/insert", insertdata);
router.post("/check", checkdata);
router.get("/get", getdata);
module.exports = router;
