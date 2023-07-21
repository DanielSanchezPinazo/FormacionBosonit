/* Hasta ahora, sólo has estado comprobando si un patrón existe o no dentro de una cadena. También puedes extraer las coincidencias encontradas 
con el método .match().

Para utilizar el método .match(), aplica el método a una cadena y pasa la expresión regular dentro de los paréntesis.

Este es un ejemplo:

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);

Aquí el primer "match" devolverá ["Hello"] y el segundo devolverá ["expressions"].

Ten en cuenta que la sintaxis .match es lo "opuesto" al método .test que has estado utilizando hasta ahora:

'string'.match(/regex/);
/regex/.test('string');

Aplica el método .match() para extraer la cadena coding. */

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Cambia esta línea
let result = extractStr.match(codingRegex); // Cambia esta línea
console.log(result);

/* Hasta ahora, sólo has podido extraer o buscar un patrón una vez.

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);

Aquí match devolverá ["Repeat"].

Para buscar o extraer un patrón más de una vez, puedes utilizar la "flag g".

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);

Y aquí match devuelve el valor ["Repeat", "Repeat", "Repeat"]

Utilizando la expresión regular starRegex, encuentra y extrae ambas palabras "Twinkle" de la cadena twinkleStar.

Nota: En tu expresión regular puedes utilizar múltiples banderas, como /search/gi  */

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Cambia esta línea
let result2 = twinkleStar.match(starRegex); // Cambia esta línea
console.log(result2);
