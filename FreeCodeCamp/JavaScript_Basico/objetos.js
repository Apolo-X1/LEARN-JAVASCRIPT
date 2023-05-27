/*conocido en python como "diccionario" aunque pueden verse iguales, tienen algunas diferencias*/

//crear un objeto
const mi_objeto = {
    "nombre": "David",
    "apellido": "Guerra",
    "edad": 18,
    "localizacion": "Colombia",
    "colores": ["amarillo", "azul", "rojo"]
}



//acceder a un valor
console.log(mi_objeto.nombre);

//otra manera de acceder
console.log(mi_objeto["apellido"]);



//actualizar un valor dentro de un objeto
mi_objeto.localizacion = "Terra";

//agregar un valor a un arreglo dentro de un objeto
mi_objeto.colores.push("verde");

//eliminar valores de un objeto
delete mi_objeto.colores;

//mirar si un objeto tiene una propiedad especifica, si esta entonces devolvera "true" de lo contrario sera "false"
console.log(mi_objeto.hasOwnProperty("edad"));



//objetos complejos
const personas = [

    {"nombre": "Jhon",
  "edad": 17,
  "colores": ["amarillo", "azul"]
  },

  {"nombre": "Juan",
  "edad": 16,
  "colores": ["rojo", "verde"]
  },

  {"nombre": "David",
  "edad": 18,
  "colores": ["gloo", "aqua"]
  }
 ]

//accediendo a los datos
 console.log(personas[1]["colores"][0]);

 //otra manera de acceder
 console.log(personas[0].edad);
 