const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/')
    {
        res.end('Welcome to our home page')
    }
    if(req.url === '/about')
    {
        res.end('here is our short history')
    }
    else{
        res.end(`<h1 style='color:red; display:flex ; alig-items:center; justify-content:center'>Opps !  page not found </h1><a href="/">Back home</a>`)   
    }
})


server.listen(5000)