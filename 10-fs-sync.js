const {readFileSync,writeFileSync} = require('fs')

//read from file
const read = readFileSync('./content/first.txt','utf-8')
//console.log(read)

const write = writeFileSync('./content/first.txt','\nsee i can edit you as much as i want since i added flag argument to a',{flag:'a'})

//console.log(read)
