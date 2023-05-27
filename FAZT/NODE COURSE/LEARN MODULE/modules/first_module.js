const user = {
    name: "David",
    last_name: "Guerra",
    age: 18
}

//this way it is exported in node
module.exports = user



//group modules to export them
let name = "Jhon";
let secret_key = 3424324;
const pw = "jdskl73";
const sum = function s (x, y){
    return x + y;
}

//exporting everything
module.exports = {
    name,
    secret_key,
    pw,
    sum
}