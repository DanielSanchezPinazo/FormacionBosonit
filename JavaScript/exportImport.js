/* Aquí una sintaxis conocida como export default. Usualmente utilizarás esta sintaxis, si es sólo un valor
el que está siendo exportado desde un archivo. También es utilizado para crear valores fallback para un archivo o módulo.

A continuación hay ejemplos usando export default:

export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}

La primera es una función nombrada, y la segunda es una función anónima.

Ya que export default es usado para declarar un valor fallback para un módulo o archivo, sólo puedes tener un valor que sea exportación 
por defecto en cada módulo o archivo. Además, no puedes usar export default con var, let, o const.

La siguiente función debe ser el valor fallback para el módulo. Por favor, añade el código necesario para hacerlo. */

export default function subtract(x, y) {
    return x - y;
  }

/* Para importar una exportación por defecto, necesita utilizar la sintaxis import de manera diferente. En el siguiente ejemplo, add es la
exportación por defecto del archivo math_functions.js. A continuación, cómo importarlo:

import add from "./math_functions.js";

La sintaxis difiere en un punto clave. El valor importado, add, no está rodeado por llaves {}. "add", aquí es simplemente un nombre de variable,
para cualquiera que sea la exportación por defecto del archivo math_functions.js. Puedes utilizar cualquier nombre aquí, al importar un valor por defecto.

El siguiente código, importa como exportación por defecto, desde el archivo math_functions.js, encontrado en el mismo directorio que este archivo.
Da a la importación el nombre de subtract. */

import subtract from "./math_functions.js";

// Cambia solo el código encima de esta línea

subtract(7,4);

