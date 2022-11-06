const os = require('os')
//user info about me
console.log(`the user info are : ${os.userInfo()} `)

//the system uptime in seconds
console.log(`the system uptime is : ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(`current os has : 
name : ${currentOS.name}
release : ${currentOS.release}
totalmem : ${currentOS.totalMem}
freeMem :  ${currentOS.freeMem}` )
