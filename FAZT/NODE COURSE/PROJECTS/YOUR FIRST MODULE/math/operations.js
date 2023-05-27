function sum (x = 0, y = 0){
    return x + y;
}

function subtraction (x = 0, y = 0){
    return x - y;
}

function division (x = 0, y = 0){
    return x / y;
}

function multiplication (x = 0, y = 0){
    return x * y;
}

//exporting functions
module.exports = {
    sum,
    subtraction,
    division,
    multiplication
}