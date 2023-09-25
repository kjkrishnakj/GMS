// const express = require('express');
// const YourModel = require('mongo');
// const mongoose = require('mongoose');
// const exphbs = require('express-handlebars');

// const hbs = require("hbs");

// const app = express();
// const port = process.env.PORT || 3000;

// // Connect to MongoDB
// mongoose.connect('mongodb://0.0.0.0:27017/world', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error(err));

// // Set up Handlebars as the template engine

// app.set("view engine","hbs")

// // app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// // Body parser middleware
// app.use(express.urlencoded({ extended: false }));

// // Routes
// app.get('/', (req, res) => {
//     // Fetch data from MongoDB and render the HTML table
//     // Replace 'YourModel' with your actual Mongoose model
//     YourModel.find()
//         .then(data => {
//             res.render('index', { data });
//         })
//         .catch(err => {
//             console.error(err);
//             res.status(500).send('Server Error');
//         });
// });

// // Start the server
// app.listen(3900, () => {
//     console.log(`Server is running on port 3900`);
// });






// const yourSchema = new mongoose.Schema({
//     name: String,
//     // Define other fields here
// });


const HelloSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    }
    
})

const hello_collection = new mongoose.model("hell",HelloSchema)
module.exports =hello_collection