const autherize = (req,res,next) =>{
    const {user} = req.query
    if (user === 'mohamed'){
        req.user = {name: 'mohamed',age:'23'}
        next();
    }else{
        res.status(401).send("Unauthorized")

    }
}

module.exports = autherize