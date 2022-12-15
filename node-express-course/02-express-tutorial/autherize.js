const { nextTick } = require("process")

const autherize = (req,res,next) =>{
    const {user} = req.query;
    if(user === 'mohamed'){
        req.user = {name: 'mohamed' , id:99}
        next()
    }
    else{
        res.status(401).send("unautherized")
    }
}

module.exports = autherize