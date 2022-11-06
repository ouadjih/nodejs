//modules
//why we use modules
//commonjs every file is module (bydefault)
//modules - encapuslated code (only share minimum)

const  names  = require("./4-names")
const { tellmePassword,sayHi } = require("./5-utils")

const {secret, ouadjih} = names //destructuring
tellmePassword(secret)
sayHi(ouadjih)

const data = require('./6-alternative-flavors')
console.log(data)


require('./7-mind-grenades')