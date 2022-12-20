const autherize = (req,res,next) =>{
    const {user} = req.query
    if (user === 'mohamed'){
        req.user = {name: 'mohamed',password:'this is his password'}
        next();
    }else{
        res.status(401).send("Unauthorized")

    }
}

module.exports = autherize