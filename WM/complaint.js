const mongoose =require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/world")
.then(()=>{
    console.log("Complaint_mongodb connnected");
})
.catch((err)=>{
    console.log("failed");
    console.log(err);
})

const ComplaintSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

const complaint_collection = new mongoose.model("Complaint",ComplaintSchema)
module.exports =complaint_collection