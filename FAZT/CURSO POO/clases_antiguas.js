/*Esta es una manera clasica de craer clases en js */




function Person(name, lastName) {

    //propiedad
    this.name = name,
        this.lastname = lastName

    //metodo
    this.displayName = function () {
        return `${this.name} ${this.lastname}`
    }
}

//instancia
const persona1 = new Person("David", "Guerra");
console.log(persona1.displayName());

//cambiar valor de una propiedad
persona1.name = "Apolo";
console.log(persona1.name);

//agregar nuevo metodo a una instancia
persona1.greet = function () {
    return `hello I'm ${this.name}`
}

//tambien se puede agreagar un nuevo metodo pero al constructor para que las demas instancias tambien posean ese nuevo metodo de la siguiente manera
Person.prototype.newGreet = function () {
    return `hello I'm ${this.name}`
}
//nota importante: "prototype" en js en muy importante ya que permite alterar un constructor añadiendo nuevos metodos, tambien puedes añadir nuevos metodos a constructores ya creados por defecto que trae js.