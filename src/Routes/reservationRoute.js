const express = require("express")
const router = express.Router()
const controller = require("../Controllers/reservationController")


router.post("/reservatoin",controller.reservation)
module.exports=router