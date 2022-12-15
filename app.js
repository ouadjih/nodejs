const express = require('express')
const app = express()
const logger = require('./logger.js')
const authorize = require('./autherize.js')
//req => middleware => response

app.use('/api',authorize)
app.use('/About',logger)

app.get("/",(req,res)=>{
    res.send("Home")
})
app.get("/About",(req,res)=>{
    res.send("About")
})
app.get("/api/Product",(req,res)=>{
    res.send("Products")
})
app.get("/api/Item",(req,res)=>{
    console.log(req.user)
    res.send("Items")
})

app.listen('5000',()=>{
    console.log("app Listening on port 5000")
})