/* El metodo "map" tambien permite recorrer elementos como el "forEach" la diferencia es que este si nos retorna un valor */


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

//de esta manera recorremos la lista
let student_list = students.map((function (student) {
  return student
}))

console.log(student_list);

//devolver un arreglo o lista con todos los nombres
let full_name = students.map((function (student) {
  return student.name + " " + student.last_name
}))

console.log(full_name);

//obtener un arreglo solo los nombres de los estudiantes con una funcion flecha
const names = students.map(student => student.name)
console.log(names);


//copiar todos los atributos del estudiante y agregarlos a un nuevo arreglo, de esta manera podremos tener un nuevo arreglo con las propiedades de otro, al cual podremos modificar o agregar mas cosas
const modifi = students.map(student => {
  return {
    ...student,//este codigo trae todas las propiedades
    title: `${student.name} - ${student.age}`
  }
})
console.log(modifi);

//tambien se puede alterar el valor de una propiedad, pero solamente es luego de traer los datos
const change_age = students.map(student => {
  return {
    ...student,
    age: 20//aqui hemos cambiado todas las edades a 20
  }
})
console.log(change_age);