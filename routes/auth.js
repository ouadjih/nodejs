const express = require("express")
const router = express.Router()


router.post('/',(req,res)=>{
    const {name}= req.body
    name?
    (console.log(name),res.status(200).send(`Welcome ${name}`)):
    res.status(401).send("please provide the right info")

})

module.exports = router