const logger = (req,res,next)=>{
    const methode = req.method;
    const url = req.url
    const time = new Date().getFullYear();
    console.log(methode,url,time,tmp)
    tmp+=1;
    next()//pass it to next
    //terminate cycle
    //res.send("last middleware sending back response ...")
}

let tmp = 0

module.exports = logger