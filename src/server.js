const express = require("express");

const app = express();

const body_parser = require("body-parser")

const connection = require("./database/connection");// connection database

var reservationRoute = require("./Routes/reservationRoute")

const PORT = 3000

app.use(body_parser.urlencoded({extended: true })); //if false then parse only strings
app.use(body_parser.json());

//middlewares
app.use(reservationRoute)

app.listen(PORT,(err)=>{
    if(err)
    console.log(err)
})