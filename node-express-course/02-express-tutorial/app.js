const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
    
    //res.status(200).send('<h1>Home page</h1>')
})
app.get('/About',(req,res)=>{
    res.status(200).send('<h1>Home page</h1>')
})
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Error 404: Page not found</h1><p>Back to home page : <a href="/">Home</a></p>')
})

app.listen(5000,()=>{
    console.log("server is on !")
})