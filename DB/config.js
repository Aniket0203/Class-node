const mongoose = require("mongoose");


async function dbconnect(){
    await mongoose.connect('mongodb+srv://eshopdhaval:1234@cluster0.qbvei.mongodb.net/eshop?retryWrites=true&w=majority');
}

dbconnect()
.then((res)=>{
    console.log("connected");
    console.log(res)
})
.catch((err)=>{
    console.log(err);
})

