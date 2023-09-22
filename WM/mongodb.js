const mongoose =require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/world")
.then(()=>{
    console.log("User_mongodb connnected");
})
.catch((err)=>{
    console.log("failed");
    console.log(err);
})

const LoginSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const collection = new mongoose.model("LogInCollection",LoginSchema)
module.exports = collection