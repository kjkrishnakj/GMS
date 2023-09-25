const express = require('express');
const axios = require('axios');
const async = require("hbs/lib/async");

const collection=require("./mongodb")
const admin_collection=require("./admin_login2")
const contact_collection=require("./contact")
const complaint_collection=require("./complaint")
// const dashboard_collection=require("views/dashboard")


const path = require("path")
const hbs = require("hbs");

const app = express();
app.use(express.json());





app.use(express.urlencoded({extended:false})) 

app.use('/img',express.static('img'));


app.set("view engine","hbs")


app.set('views', [
    path.join(__dirname, 'views'),
    path.join(__dirname, '/')
]);





const mongoose=require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/world', { useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;
const mySchema = new Schema({ name: String,location: String,description: String, });
const MyModel = mongoose.model('world', mySchema, 'complaints');

// app.delete("/delete/:itemId", async (req, res) => {
//   try {
//     const itemId = req.params.itemId;
//     const deletedItem = await Item.findByIdAndRemove(itemId);

//     if (!deletedItem) {
//       return res.json({ success: false, error: "Item not found." });
//     }

//     return res.json({ success: true });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, error: "Error deleting item." });
//   }
// });



app.get("/",function(req,res){
    res.sendFile(__dirname + '/index.html');
    // res.render(__dirname + '/views/dashboard');
})
app.use(express.static(__dirname));
app.get("/login",(req,res)=>{
    res.render("login")
    
})
app.get("/signin",(req,res)=>{
    res.render("signin")

})
app.get("/index",(req,res)=>{
    res.render("index")
    
})
app.get("/signin",(req,res)=>{
    res.render("signin")
    
}) 

app.get("/contact",(req,res)=>{
    res.render("contact")
    
})
app.get("/about",(req,res)=>{
    res.render("about")
    
})
app.get("/admin_login",(req,res)=>{
    res.render("admin_login")
    

})
app.get("/complaint",(req,res)=>{
    res.render("/complaint")
    
})
app.get("/test2",(req,res)=>{
    res.render("/test2")
    
})





app.post("/signin",async(req,res)=>{
    const data={
        name:req.body.name,
        password:req.body.password
    }  
    await collection.insertMany([data])
    res.render("login")
    
})



app.post("/login",async(req,res)=>{
    try{
     const check =await collection.findOne({name:req.body.name})
     if(check.password===req.body.password){
        res.render("complaint")
     }
     else{
        res.send("wrong password")
     }
    } 
    catch{
     res.send("wrong details")
    }
 })
app.post("/dashboard",async(req,res)=>{
    try{
     const check2 =await admin_collection.findOne({name:req.body.name})
     if(check2.password===req.body.password){
        
        const data = await MyModel.find({}); 
        
         res.render('dashboard', { data });
        
     }
     
     else{
        res.send("wrong password")
     }  
    } 
    catch{
     res.send("wrong details")
    }
    
    
 })
app.post("/complaint",async(req,res)=>{
    const data2={
        name:req.body.name,
        location:req.body.location,
        description:req.body.description
    }  
    await complaint_collection.insertMany([data2])

    res.render("complaint")
    
 })
 
app.post("/contact",async(req,res)=>{
    const data3={
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
    }  
    await contact_collection.insertMany([data3])
    res.render("contact")
    
})

// app.get('/delete/:id',(req,res)=>{
//     .findByIdAndDelete({_id:req.params},(err,docs)=>{
//         if(err){
//             console.log("error");
//         }
//         else{
//             console.log("deleted");
//         }
//     })
// })



app.delete('/delete/:itemId', async (req, res) => {
    try {
      const itemId = req.params.itemId;
      const deletedItem = await MyModel.findByIdAndRemove(itemId);
  
      if (!deletedItem) {
        return res.json({ success: false, error: 'Item not found.' });
      }
  
      return res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: 'Error deleting item.' });
    }
  });




app.listen(3200,function(){
    console.log("runnning on 3200");
})