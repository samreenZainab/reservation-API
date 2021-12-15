const EXPRESS = require("express");

const app = EXPRESS();

const BODY_PARSER = require("body-parser")

const ENV = require('dotenv').config()

const {dbConnection}= require("./database/connection")

const rervationRoute = require("./Routes/reservationRoute")

const PORT = process.env.PORT || 8080;

dbConnection()

app.use(BODY_PARSER.urlencoded({extended: true })); 
app.use(BODY_PARSER.json());

//middlewares
app.use(rervationRoute)

app.get("/",(req,res)=>{
    res.send("ok")
})

app.listen(PORT, function() {
    console.log("app is running on port " + PORT);
});