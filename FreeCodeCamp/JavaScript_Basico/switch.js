/*Sentencia Switch*/

function clasificar_valor(valor) {

    let respuesta = "";

    switch (valor) {

        //este codigo solo se ejecuta si el valor es igual a 1
        case 1:
            respuesta = "Alpha";
            break;
        //este codigo solo se ejecuta si el valor es igual a 2
        case 2:
            respuesta = "Betha";
            break;
        //este codigo solo se ejecuta si el valor es igual a 3
        case 3:
            respuesta = "Gamma";
            break;
        //esta es como el else, solamente se ejecuta si nunguna de las anteriores es correcta
        default:
            respuesta = "caso 0";
            break;

    }

    return respuesta;

}
console.log(clasificar_valor(3));










//part2
function notaaas (valor){

    switch (valor) {
        case 10:
        case 9:
          console.log("Sobresaliente");
          break;
        case 8:
          console.log("Notable");
          break;
        case 7:
          console.log("Bien");
          break;
        case 6:
          console.log("Suficiente");
          break;
        default:
          console.log("Insuficiente");
      }
}
notaaas(3);
  









//part 3
function colores (color) {

    switch (color) {
      //se pueden colocar multiples casos
        case "rojo":
        case "verde":
        case "azul":
          console.log("Color primario");
          break;
        case "amarillo":
        case "magenta":
        case "cian":
          console.log("Color secundario");
          break;
        default:
          console.log("No es un color conocido");
      }
}
colores("azul");