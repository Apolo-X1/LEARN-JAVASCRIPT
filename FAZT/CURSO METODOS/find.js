/* permite buscar los elementos dentro de un arreglo (si hay varias propiedades con el valor que se busca, solamente devolvera el primer valor que encuentre)*/


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
  
  //buscar nombre
  const resultado = students.find(function(student){
    if (student.name === "David"){
      return 1
    }
  })
  console.log(resultado)
  
  //manera corta
  const resultado2 = students.find( (student) => student.name === "David")//si el resultado no existe, devolvera "indefined" por defecto
  console.log(resultado2)