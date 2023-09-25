const mongoose =require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/world")
.then(()=>{
    console.log("Feedback_mongodb connnected");
})
.catch((err)=>{
    console.log("failed");
    console.log(err);
})

const FeedbackSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
})

const feedback_collection = new mongoose.model("feedbacks",FeedbackSchema)
module.exports =feedback_collection