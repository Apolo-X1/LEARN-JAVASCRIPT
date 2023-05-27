/* El metodo forEach no retorna nada, si quieres guardar el dato debes guardarlo en una variable o lista fuera del metodo */


const students = [
  {
    name: "David",
    last_name: "Gomez",
    age: 18

  },
  {
    name: "Jhon",
    last_name: "Paz",
    age: 21
  },
  {
    name: "War",
    last_name: "Zos",
    age: 17
  },
  {
    name: "Bryan",
    last_name: "Sol",
    age: 19
  },
  {
    name: "Juan",
    last_name: "Poo",
    age: 23
  }
];


//una manera comun de recorrer una lista
for (x = 0; x <= students.length; x += 1) {
  console.log(students[x]);
}


//la mejor manera de recorrerlo es con un "for each"
students.forEach(function (student) {
  console.log(student);
})


//tambien se puede hacer con una funcion flecha
students.forEach((student) => { console.log(student) })


//si quiero solo ver una propiedad especifica de los estudiantes, (en este caso mostraremos solo la edad)
students.forEach((student) => { console.log(student.age) })


//guardando datos en una lista ya que si no, se pierden los datos
const full_name = [];

students.forEach((student) => {
  full_name.push(student.name + " " + student.last_name)
})

console.log(full_name);