const express = require("express")
const ROUTER = express.Router()
const CONTROLLER = require("../Controllers/reservationController")


// ROUTER.get("/get_reservations",
// function (req, res) {
//     res.json(adminController.login(req.body))}
//     )

ROUTER.get("/get-reservation",CONTROLLER.fetchALL)

ROUTER.post("/Add_reservation",CONTROLLER.AddReservation)

ROUTER.put("/update_Reservation:id",CONTROLLER.updateReservation)

ROUTER.delete("/delete_Reservation:id",CONTROLLER.deleteReservation)

module.exports=ROUTER

