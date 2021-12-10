const express = require("express");
const app = express()
const moment = require("moment")
const reservationModel = require("../Models/reservationModel");


class CustomerReservation {
    async reservation(req,res){
            // empty string check
                 if(    req.body.name === ""
                     || req.body.vehicalName ===""
                     || req.body.slot ==="")
            {return res.status(403).send({
            success:false,err: {message: "incomplete data"} });}

            // past date and time check
                if( req.body.slot < moment().format() )
                {
                    return res.status(400).send({
                        success:false,
                        message:"please enter your carefull"
                    })
                }
            // reservation check
            if(await reservationModel.findOne({slot:req.body.slot}).select('slot'))
            {
                return res.status(200).send({
                    success:false,
                    message:"this slot is already reserved please chose another slot"
                })
            }
            else
            {
                const userReservation=new reservationModel({
                    name:req.body.name,
                    vehicalName:req.body.vehicalName,
                    slot:req.body.slot
                })
                await userReservation.save()
                .then((userdata)=>{
                    return res.status(200).send({
                      success: true, 
                      message: "record saved successfully"});
                  })
                  .catch((err)=>{
                      console.log(err)
                      return res.status(400).send({
                          success:false,
                          message: "hjsgdysjhsadf" });
                  })
           }
        
    }

} 
module.exports=new CustomerReservation()