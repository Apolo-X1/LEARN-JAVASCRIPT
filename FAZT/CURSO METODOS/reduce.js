/* se utiliza para reducir un array a un solo valor, aplicando una función acumuladora a cada elemento del array. La función acumuladora toma dos parámetros: el valor acumulado actual (también conocido como "acumulador") y el valor del elemento actual del array */


const students = [
  {
    name: "David",
    last_name: "Gomez",
    age: 18,
    skills: ["Java", "Python", "HTML", "CSS"]

  },
  {
    name: "Jhon",
    last_name: "Paz",
    age: 21,
    skills: ["Java", "HTML", "CSS"]
  },
  {
    name: "War",
    last_name: "Zos",
    age: 17,
    skills: ["Java", "Python", "HTML", "CSS", "JavaScript"]
  },
  {
    name: "Bryan",
    last_name: "Sol",
    age: 19,
    skills: ["Java", "Python", "HTML", "C#", "JavaScript"]
  },
  {
    name: "Juan",
    last_name: "Poo",
    age: 23,
    skills: ["Java", "Python", "HTML", "CSS", "JavaScript"]
  }
];


//una manera de sumar las edades
let total = 0

for (let i = 0; i < students.length; i += 1) {
  total += students[i].age;
}
console.log(total)


//ahora con el metodo "reduce"
const resultado = students.reduce(function (suma, student) {
  return suma + student.age;
}, 0) //el "0" define el valor inicial para suma

console.log(resultado)

//tambien se puede reducir a una funcion flecha
const result = students.reduce((suma, student) => suma + student.age, 0)

console.log(result)


//Obtener todas las habilidades en un array sin que se repitan
const r = students.reduce(function(all_skills, student){
  return  Array.from( new Set( [ ...all_skills, ...student.skills ] ) )
}, [])

console.log(r)