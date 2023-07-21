/* Las expresiones regulares se utilizan en lenguajes de programación para coincidir con partes de cadenas. 
Creas patrones para ayudarte a hacer esa coincidencia.

Si quieres encontrar la palabra "the" en la cadena "The dog chased the cat", puedes utilizar la siguiente expresión regular: /the/. 
Ten en cuenta que las comillas no son requeridas dentro de la expresión regular.

JavaScript tiene múltiples formas de usar expresiones regulares. Una forma de probar una expresión regular es usando el método .test(). 
El método .test() toma la expresión regular, la aplica a una cadena (que se coloca dentro de los paréntesis), y devuelve "true" o "false" 
si tu patrón encuentra algo o no.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);

El método "test" aquí devuelve "true".

Aplica la expresión regular myRegex en la cadena myString usando el método .test(). */

let myString = "Hello, World!";
let myRegex = /Hello/;
// let result = myRegex; // Cambia esta línea
let result = myRegex.test(myString);
console.log(result);

/* En el desafío anterior, buscaste la palabra "Hello" usando la expresión regular /Hello/. Esa expresión regular buscó una coincidencia literal 
de la cadena "Hello". Aquí hay otro ejemplo donde se busca una coincidencia literal de la cadena "Kevin":

let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);

Esta llamada a test devolverá "true".

Cualquier otra variante de "Kevin" no coincidirá. Por ejemplo, la expresión regular /Kevin/ no coincidirá con "kevin" o "KEVIN".

let wrongRegex = /kevin/;
wrongRegex.test(testStr);

Esta llamada a test devolverá "false". 

Puedes buscar múltiples patrones usando el operador alternation o OR: |.

Este operador coincide con los patrones antes o después de él. Por ejemplo, si deseas coincidir con las cadenas "yes" o "no", 
la expresión regular que quieres es /yes|no/.

También puedes buscar más de dos patrones. Puedes hacer esto añadiendo más patrones con más operadores OR separándolos, como /yes|no|maybe/.

Completa la expresión regular petRegex para que coincida con las mascotas dog, cat, bird, o fish. */

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Cambia esta línea
let result2 = petRegex.test(petString);
console.log(result2);

/* A veces no conoces (o no necesitas conocer) los caracteres exactos en tus patrones. Pensar en todas las palabras que coincidan, digamos, 
con una ortografía errónea llevaría mucho tiempo. Afortunadamente, puedes ahorrar tiempo utilizando el carácter de comodín: .

El carácter de comodín . coincidirá con cualquier carácter único. El comodín también es llamado dot y period. Puedes utilizar el carácter de 
comodín como cualquier otro carácter en la expresión regular. Por ejemplo, si quieres hacer coincidir hug, huh, hut, y hum, puedes usar la 
expresión regular /hu./ para que coincida con las cuatro palabras.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);

Ambas llamadas a test devolverán true. 

Completa la expresión regular unRegex para que coincida con las cadenas run, sun, fun, pun, nun, y bun. Tu expresión regular debe usar el 
carácter de comodín. */

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Cambia esta línea
let result3 = unRegex.test(exampleStr);
console.log(result3);