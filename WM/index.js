const express = require('express');
const axios = require('axios');

const async = require("hbs/lib/async");
const collection=require("./mongodb")
const admin_collection=require("./admin_login2")

const complaint_collection=require("./complaint")
// const dashboard_js=require("./dashboard")

const path = require("path")
const hbs = require("hbs");

const app = express();

const tempelatepath=path.join(__dirname,'/')


app.use(express.urlencoded({extended:false})) 

app.use('/img',express.static('img'));


app.set("view engine","hbs")

app.set("views",tempelatepath);



app.get("/",function(req,res){
    res.sendFile(__dirname + '/index.html');
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
app.get("/dashboard",(req,res)=>{
    res.render("dashboard")
    
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

axios.get('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css')
    .then(response => {
        // Do something with the response
    })
    .catch(error => {
        console.error('Error:', error);
});



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
app.post("/admin_login",async(req,res)=>{
    try{
     const check2 =await admin_collection.findOne({name:req.body.name})
     if(check2.password===req.body.password){
        res.render("dashboard")
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
    const data={
        name:req.body.name,
        location:req.body.location,
        description:req.body.description
    }  
    await complaint_collection.insertMany([data])
    
 })
// app.post("/dashboard",async(req,res)=>{
//     alert("hellp");
//     const inputBox= document.getElementById("input_box"); 
//     const listConatiner= document.getElementById("list-container"); 
//     function addTask(){
//         if(inputBox.value===''){
//             alert("You must write something");
    
//         }
//         else{
//             let li  = document.createElement("li");
//             li.innerHTML = inputBox.value;
//             listConatiner.appendChild(li);
//             let span = document.createElement("span");
//             span.innerHTML = "\u00d7";
//             li.appendChild(span);
    
//         }
//         inputBox.value = "";
//         saveData()
//     }  
//     listConatiner.addEventListener("click",function(e){
//         e.target.parentElement.remove();
//         saveData() 
        
//     })
//     function saveData(){
//         localStorage.setItem("data",listConatiner.innerHTML);
//     }
//     function showTask(){
//         listConatiner.innerHTML = localStorage.getItem("data");
//     }
//     showTask();
//  })












app.listen(3200,function(){
    console.log("runnning on 3200");
})