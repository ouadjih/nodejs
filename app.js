const { query } = require('express')
const express = require('express')
const app = express()
let { people } = require('./data')
let { products } = require('./data')

//static assets
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false }))

//parse json data
app.use(express.json())

//post data using html form action and type
app.post('/login',(req,res)=>{
    const {name} = req.body
    name.length > 10?
    (console.log(req.body.name),res.status(200).send(`Welcome ${name}`)):
    res.status(401).send("please provide the right info")

})

//get data
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true , data:people})
})

//post data using JS we need express.json middleware to read 'mohamed' for exemple name:'mohamed' 
app.post('/api/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).json({success:true, person:name })
})

app.post('/api/product',(req,res)=>{
   const {name,image,price,desc} = req.body;

   if(name.length<10){
    res.status(201).json({success:true , data :[...products,{name,image,price,desc}]})
   }
   res.status(400).json({success:false,msg:'please enter a valid product'})
    
})
app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body
   
    const person = people.find((p) => p.id === Number(id))

    if(!person){
        res.
        status(404).
        json({success:false,msg:`person dont exist with id ${id}`})
    }
    const newpeople = people.map((p)=>{
        if (p.id === Number(id)){
            p.name=name
        }
        return p
    })
    res.status(200).json({success:true,data:newpeople})
   
})


app.delete('/api/people/:id',(req,res)=>{
  let person = people.find((p)=> p.id === Number(req.params.id))
  if(!person){
    return res.status(404).send({success:false,msg:`No person with id ${req.params.id}`});
  }
  const newPeople= people.filter((p)=>p.id !== Number(req.params.id))
  return res.status(200).send({success:true,data:newPeople});

})

app.listen('5000',()=>{
    console.log("app Listening on port 5000")
})