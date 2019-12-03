const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const kraSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId

    },
    userId: {
        type:  Number,
        required: true,
        ref:"User"
    },
    reportingManager: {
        type: Number,
        ref:"User",
        required:true
    },
    kraSheet:[{
        date:{
            type:Date,
            default:new Date()
        },
        kraAttributes:{}
    }]
});
module.exports=mongoose.model("KraSheetModel",kraSchema)
