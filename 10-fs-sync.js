const {readFileSync,writeFileSync} = require('fs')

//read from file
console.log('starting task 1')
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
//console.log(read)

const write = writeFileSync('./content/result-sync.txt',
`here is the result : ${first} ${second}`,{flag:'a'})
console.log("finished task 1")
console.log('starting task 2')

//console.log(read)
