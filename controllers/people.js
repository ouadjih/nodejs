
let { people } = require('../data')
const getPeople = (req,res)=>{
    res.status(200).json({success:true , data:people})
}

const putPeople = (req,res)=>{
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
   
}

const deletePeople = (req,res)=>{
    let person = people.find((p)=> p.id === Number(req.params.id))
    if(!person){
      return res.status(404).send({success:false,msg:`No person with id ${req.params.id}`});
    }
    const newPeople= people.filter((p)=>p.id !== Number(req.params.id))
    return res.status(200).send({success:true,data:newPeople});
  
}

const createPerson = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).json({success:true, person:name })
}

module.exports = {getPeople,putPeople,deletePeople,createPerson}