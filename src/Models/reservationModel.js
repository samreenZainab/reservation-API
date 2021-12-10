const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    vehicalName:{
        type:String
    },
    slot:{
        type:Date,
        required:true
    }
    // time:{
    //     type:Number,
    //     required:true
    // },
    // Date:{
    //     type:Date,
    //     required:true
    // }
})
 module.exports= new mongoose.model("reservations",reservationSchema);