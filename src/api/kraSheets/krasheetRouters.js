var express = require("express");
const {check,validationResult}=require("express-validator")
var router = express.Router();
const adminauth = require("../middleware/adminauth");
const userauth = require("../middleware/userauth");
const { Addkra}=require("../kraSheets/kraSheetcontroller/addkraSheet")

router.post("/addkra",userauth,Addkra)



module.exports = router;