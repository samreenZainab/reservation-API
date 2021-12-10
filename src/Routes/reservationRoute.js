const express = require("express")
const router = express.Router()
const controller = require("../Controllers/reservationController")


router.post("/reservatuin",controller.reservation)
module.exports=router