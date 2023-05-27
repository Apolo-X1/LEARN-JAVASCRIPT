class Animal {
    constructor(raza, sonido){
      this._raza = raza; //el guion bajo indica a otros desarrolladores que es una propiedad privada (aunque si se puede acceder)
      this._sonido = sonido;
    }
  
    //get (obtener un valor asi sea privado, es como un intermediario ya que no lo obtiene directamente)
    get raza(){
      return this._raza;
    }
  
    //set (modificar un valor asi sea privado, es como un intermediario ya que no lo obtiene directamente)
    set raza(nueva_raza){
      this._raza = nueva_raza;
    }
  
  }
  
  //crear nuevo objeto
  const perro = new Animal("Lobo siberiano", "Grrr");
  
  console.log(perro._sonido)
  
  //actualizar un valor con el set
  perro._sonido = "Auuuuu";
  
  console.log(perro._sonido)