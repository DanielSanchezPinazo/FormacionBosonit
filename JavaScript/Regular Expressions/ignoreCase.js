/* Hasta ahora, has visto expresiones regulares para hacer coincidir cadenas literales. Pero a veces, tal vez quieras hacer coincidir 
las diferencias de capitalización.

La capitalización (o también llamada capitalización de letra) es la diferencia entre mayúsculas y minúsculas. 

Puedes coincidir ambos casos utilizando algo llamado "flag". Existen otras banderas, pero aquí te centrarás en la que ignora la capitalización 
de las letras, la "flag i". Puedes usarla añadiéndola a la expresión regular. Un ejemplo de uso de esta "flag" es /ignorecase/i. 
Esta expresión regular puede coincidir con las cadenas "ignorecase", "igNoreCase" e "IgnoreCase".

Escribe una expresión regular fccRegex para que coincida con "freeCodeCamp" sin importar su capitalización. Tu expresión regular no debe coincidir 
con ninguna abreviatura o variación con espacios. */

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Cambia esta línea
let result = fccRegex.test(myString);
console.log(result);




