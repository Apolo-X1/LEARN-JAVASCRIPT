//herencia

class Persons{
    constructor(name, lastName, age){
      this.name = name;
      this.lastName = lastName;
      this.age = age;
    }
  
    greet(){
      return `hello, I'm ${thi.name}`
    }
    
  }
  //se utiliza la palabra "extends" seguido de la clase va a heredar
  class Programmer extends Persons{
    constructor (name, lastName, age, language){
      //"super()" trae todas las propiedades de la clase padre, es necesario para no tener errores
      super(name, lastName, age);
      this.language = language;
    }
    
  }
  
  //creando una persona programador que heredo propiedades de la clase Persons
  const programador = new Programmer ("David", "Guerra", 18, "JavaScript");
  console.log(programador);