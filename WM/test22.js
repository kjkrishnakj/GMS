const mongoose = require('mongoose');

// const yourSchema = new mongoose.Schema({
//     name: String,
//     // Define other fields here
// });

// module.exports = mongoose.model('YourModel', yourSchema);
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