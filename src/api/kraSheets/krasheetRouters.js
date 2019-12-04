var express = require("express");
const {check,validationResult}=require("express-validator")
var router = express.Router();
const adminauth = require("../middleware/adminauth");
const userauth = require("../middleware/userauth")
const managerauth = require("../middleware/managerauth")
const { Addkra }=require("../kraSheets/kraSheetcontroller/addkraSheet")
const { Viewkra }=require("../kraSheets/kraSheetcontroller/viewkrasheet")
const { viewkramanager }=require("../kraSheets/kraSheetcontroller/viewkramanager")
const { updatekramanager }=require("../kraSheets/kraSheetcontroller/updateKraSheet")

router.post("/user/addkra",userauth,Addkra);
router.get("/user/viewkra",userauth,Viewkra);
router.get("/manager/viewkra",managerauth,viewkramanager);
router.post("/manager/updatekra",managerauth,updatekramanager)


module.exports = router;