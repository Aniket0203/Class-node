const express = require('express')
var bodyParser= require('body-parser')
// var mongoose = require("mongoose")


require('dotenv').config();
require('./DB/config');



const commonR= require('./routes/commonRoute')

const app= express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.set('view engine','ejs')

app.use("/",commonR)


app.use("/assests",express.static('assests'));
// app.use(mongooseAuth.middleware()); // Anonymous user loaded here.



app.listen(process.env.PORT ,()=>{
    console.log("listen on port 6500")
})