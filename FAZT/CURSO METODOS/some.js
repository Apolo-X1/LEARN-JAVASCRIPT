/* sirve para buscar datos, si el dato que se pide esta en el array u objeto devolvera "true" de no ser asi, devolvera "false" */


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
  
  //comprobar si existe un valor en el array
  const resultado = students.some (function (student) {
    if (student.name === "David"){
      return true;
      
    }else{
      return false;
    }
  })
  
  console.log(resultado)
  
  //forma corta
  const resultado2 = students.some( (student) => student.name === "David")
  console.log(resultado2)