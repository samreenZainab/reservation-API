const express = require("express")
const router = express.Router()
const controller = require("../Controllers/reservationController")


router.get("/",controller.fetchALL)

router.post("/Addreservation",controller.Addreservation)

router.put("/updateReservation:id",controller.updateReservation)

router.delete("/deleteReservation:id",controller.deleteReservation)

module.exports=router

