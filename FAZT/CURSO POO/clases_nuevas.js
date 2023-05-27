class Persons {

  constructor(name, lastName, age) {
    //propiedad
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  //metodo
  greet() {
    return `hello, I'm ${thi.name}`
  }
}

//instancia
const person1 = new Persons("David", "Guerra", 18);
console.log(person1);
