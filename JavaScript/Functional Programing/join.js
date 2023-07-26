/* El método "join" se utiliza para unir los elementos de un arreglo creando una cadena de texto. Se necesita un argumento para especificar el 
delimitador a utilizar para separar los elementos del arreglo en la cadena. Aquí hay un ejemplo:

const arr = ["Hello", "World"];
const str = arr.join(" ");

"str" tendrá una cadena con valor "Hello World".

Utiliza el método "join" (entre otros) dentro de la función "sentensify" para hacer una oración a partir de las palabras en la cadena "str". 
La función debe devolver una cadena. Por ejemplo, "I-like-Star-Wars" se convertiría en "I like Star Wars". Para este desafío, no utilices el 
método "replace". */

function sentensify(str) {
    // Cambia solo el código debajo de esta línea
    
    return str.split(/[-.,]/).join(" ");
  
    // Cambia solo el código encima de esta línea
  }
  
  sentensify("May-the-force-be-with-you");
  console.log(sentensify("May-the-force-be-with-you"));
  console.log(sentensify("The.force.is.strong.with.this.one"));
  console.log(sentensify("There,has,been,an,awakening"));






