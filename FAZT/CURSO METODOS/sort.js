/* ordenar los valores dependiendo de una condicion */


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
  
  //ordenando array por edades, de menor a mayor
  let ordenado = students.sort(function (a, b){
    
    if (a.age > b.age){ //si los quieres ordenar de mayor a menor, cambia el signo ">" a "<"
      return 1;
      
    }else{
      return -1
    }
  })
  
  console.log(ordenado)
  
  //otra manera pero mas corta, haciendo uso de una funcion flecha y el operador ternario
  const orden_rapido = students.sort((a, b) => a.age > b.age ? 1 : -1)
  console.log(orden_rapido)