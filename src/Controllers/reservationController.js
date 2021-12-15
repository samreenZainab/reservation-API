const MOMENT = require("moment")
const RESERVATION_MODEL = require("../Models/reservationModel");
const RESPONSE_SERVICE = require("../services/responeService")


class CustomerReservation {

    async fetchALL(req,res){
        RESERVATION_MODEL.find({})
        .then((userdata)=>{
        return res.status(200).send({
            res:RESPONSE_SERVICE.createResponse("SUCCESS",userdata)
        }) 
        })
        .catch((err)=>{
            console.log(err)

            return res.status(500).send({
                res:RESPONSE_SERVICE.createResponse("SERVER_ERROR","something went wrong")
            });
        })
    }
    

    async AddReservation(req,res){
            // empty string check
                 if(    req.body.name === ""
                     || req.body.vehicalName ===""
                     || req.body.slot ===""){
                        return res.status(206).send({
                         res:RESPONSE_SERVICE.createResponse("PARTIAL_CONTENT","incomplete data")
                        }) 
                     }
                     

            // past date and time check
                if( req.body.slot < MOMENT().format() )
                {
                    return res.status(401).send({
                        res:RESPONSE_SERVICE.createResponse("FAILURE","your chosing slot is in past please enter carfully")
                        
                    })
                }
            // reservation check
            if(await RESERVATION_MODEL.findOne({slot:req.body.slot}).select('slot'))
            {
                return res.status(200).send({
                    res:RESPONSE_SERVICE.createResponse("SUCCESS","this slot is already reserved please chose another slot")
                })
            }
            else
            {
                const userReservation=new RESERVATION_MODEL({
                    name:req.body.name,
                    vehicalName:req.body.vehicalName,
                    slot:req.body.slot
                })
                await userReservation.save()
                .then((userdata)=>{
                    return res.status(200).send({
                    res:RESPONSE_SERVICE.createResponse("SUCCESS","record saved successfully")})
                  })
                  .catch((err)=>{
                      console.log(err)
                      return res.status(400).send({
                        res:RESPONSE_SERVICE.createResponse("FAILURE","saved faild") })
                  })
           }
        
    }

    async updateReservation(req,res){
        await RESERVATION_MODEL.findOneAndUpdate({id:req.body.id,
            fullName:req.body.fullName,
            email:req.body.email,
            phoneNumber:req.body.phoneNumber
        })
        .then((userdata)=>{
            return res.status(200).send({
                res:RESPONSE_SERVICE.createResponse("SUCCESS","record UpDated successfully")})
          })
          .catch((err)=>{
              return res.status(400).send({
                res:RESPONSE_SERVICE.createResponse("FAILURE","saved failed")  });
          })
        
    }
    async deleteReservation(req,res){
        await RESERVATION_MODEL.findOneAndDelete({id:req.body.id})
        .then((userdata)=>{
            return res.status(200).send({
              success: true, 
              message: "your record deleted successfully"});
          })
          .catch((err)=>{
              return res.status(400).send({
                  success:false,
                  err: {message: "request failed try again"} });
          })
    }

} 
module.exports=new CustomerReservation()