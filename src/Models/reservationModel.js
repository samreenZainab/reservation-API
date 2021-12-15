const MONGOOSE = require("mongoose");

const reservationSchema = new MONGOOSE.Schema({
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
})
 module.exports= new MONGOOSE.model("reservations",reservationSchema);