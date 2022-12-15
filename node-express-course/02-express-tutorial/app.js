const express = require('express')
const app = express()
const logger = require('./logger')
const autherize = require('./autherize')

// req => middleware => res
//must past middle ware to next middleware or send response.
app.use([autherize,logger])

app.get('/',(req,res)=>{
    res.send('Home')
})

app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/api/v1/products',(req,res)=>{
    res.send('products')
})
app.get('/api/v1/items',(req,res)=>{
    res.send('items')
})

app.listen('5000',(req,res)=>{
    console.log("Server is listening on port 5000...")
})