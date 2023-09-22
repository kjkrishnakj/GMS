const mongoose =require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/world")
.then(()=>{
    console.log("Admin_mongodb connnected");
})
.catch((err)=>{
    console.log("failed");
    console.log(err);
})

const AdminSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const admin_collection = new mongoose.model("complaints",AdminSchema)
module.exports = admin_collection