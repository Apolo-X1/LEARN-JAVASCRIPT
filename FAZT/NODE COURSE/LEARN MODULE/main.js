//this way it's imported in node
const user = require("./modules/first_module.js");

console.log(user);

//importing everything
const everything = require("./modules/first_module.js")
console.log(everything)

//now, if you want some objects
const {secrect_key, sum} = require("./modules/first_module.js")
console.log(secrect_key ,sum(4, 2))