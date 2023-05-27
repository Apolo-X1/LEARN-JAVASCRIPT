/* sirve para buscar datos, todos los objetos tienen que tener el valor buscado para dar "true" si hay uno que no cumpla, entonces mostrara "false" */


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
  
  //comprobar
  const resultado = students.every ( (student) => student.age === 19)
  console.log(resultado)