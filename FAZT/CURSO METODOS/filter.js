/* El metodo filter, crea un arreglo con los elementos que cumplan cierta condicion */


const students = [
  {
    name: 'David',
    last_name: 'Gomez',
    age: 18,
  },
  {
    name: 'Jhon',
    last_name: 'Paz',
    age: 21,
  },
  {
    name: 'War',
    last_name: 'Zos',
    age: 17,
  },
  {
    name: 'Bryan',
    last_name: 'Sol',
    age: 19,
  },
  {
    name: 'Juan',
    last_name: 'Poo',
    age: 23,
  },
];

//la manera clasica es con un for
const edades = [];

for (let x = 0; x < students.length; x += 1) {
  if (students[x].age > 20) {
    edades.push(students[x]);
  }
}

console.log(edades);

//la mejor manera con el metodo filter
students.filter(function(student){
  if (student.age >= 20){
    console.log(student)
  }
})

//otra manera de hacerlo
const resultado = students.filter(function(student){
  if (student.age >= 20){
    return true
  }
})

//una manera aun mas corta con una funcion flecha
const resultado2 = students.filter(student => student.age >= 20)
