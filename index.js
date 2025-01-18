const express = require('express')
const app = express() ;
const port = 7777 ;

app.get("/",(req,res)=>{
    res.send("Homepage")
    console.log("Homepage is Working")
})

app.get("/about",(req,res)=>{
    res.send("About Us")
    console.log("About Us Page is Working")
})

app.get("/contact-us",(req,res)=>{
    res.send("Contact Us")
    console.log("Contact Us Page is Working")
})

app.listen(port ,()=>{
    console.log(`server is running on ${port}`)
})