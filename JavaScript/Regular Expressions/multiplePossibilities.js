/* Aprendiste cómo hacer coincidir los patrones literales /literal/ y el carácter de comodín /./. Estos son los extremos de las 
expresiones regulares, donde uno encuentra coincidencias exactas y el otro coincide de todo. Hay opciones que representan un equilibrio 
entre los dos extremos.

Puedes buscar un patrón literal con cierta flexibilidad utilizando las clases de caracteres. Las clases de caracteres te permiten definir 
un grupo de caracteres que deseas coincidir colocándolos dentro de corchetes [ ].

Por ejemplo, si quieres hacer coincidir "bag", "big", y "bug" pero no "bog", puedes crear la expresión regular /b[aiu]g/ para hacer esto. 
[aiu] es la clase de caracteres que solo coincidirá con los caracteres "a", "i", o "u".

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

En orden, las cuatro llamadas de match devolverán los valores ["big"], ["bag"], ["bug"], and null. 

Usa una clase de caracteres con las vocales (a, e, i, o, u) en tu expresión regular vowelRegex para encontrar todas las vocales en la cadena quoteSample.
Nota: Asegúrate de hacer coincidir tanto las vocales mayúsculas como minúsculas. */

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[a|e|i|o|u]/ig; // Cambia esta línea
let result = quoteSample.match(vowelRegex); // Cambia esta línea
console.log(result);

/* Dentro de un conjunto de caracteres, puedes definir un rango de caracteres a coincidir usando un carácter de guion: -.

Por ejemplo, para hacer coincidir las letras minúsculas desde la a a la e usarías [a-e].

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);

En orden, las tres llamadas a match devolverán los valores ["cat"], ["bat"] y null.

Haz coincidir todas las letras en la cadena quoteSample.
Nota: Asegúrate de hacer coincidir tanto las letras mayúsculas como minúsculas. */

let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Cambia esta línea
let result2 = quoteSample2.match(alphabetRegex); // Cambia esta línea
console.log(result2);

/* También funciona para hacer coincidir un rango de números. Por ejemplo, /[0-5]/ coincide con cualquier número entre 0 y 5, incluyendo 0 y 5.
Además, es posible combinar un rango de letras y números en un único conjunto de caracteres.

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);

Crea una sola expresión regular que coincida con un rango de letras entre h y s, y un rango de números entre 2 y 6. 
Recuerda incluir las banderas apropiadas en la expresión regular. */

let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Cambia esta línea
let result3 = quoteSample3.match(myRegex); // Cambia esta línea
console.log(result3);

/* También podrías crear un conjunto de caracteres que no desees coincidir. Este tipo de conjuntos de caracteres se llaman conjuntos 
de caracteres negados. Para crear un conjunto de caracteres negados colocas un carácter de intercalación (^) después del corchete de apertura 
y antes de los caracteres que no quieres coincidir.

Por ejemplo, /[^aeiou]/gi coincide con todos los caracteres que no son una vocal. Ten en cuenta que caracteres como ., !, [, @, / y 
el espacio en blanco coinciden; el conjunto de caracteres de vocal negados sólo excluye los caracteres de vocal.

Crea una sola expresión regular que coincida con todos los caracteres que no son un número o una vocal. 
Recuerda incluir las banderas apropiadas en la expresión regular. */

let quoteSample4 = "3 blind mice.";
let myRegex2 = /[^aeiou0-9]/gi; // Cambia esta línea
let result4 = quoteSample4.match(myRegex2); // Cambia esta línea
console.log(result4);

/* A veces, es necesario coincidir con un carácter (o grupo de caracteres) que aparezca una o más veces seguidas. 
Esto significa que aparece al menos una vez, y puede repetirse.

Puedes usar el carácter + para comprobar si es así. Recuerda, el carácter o patrón debe estar presente consecutivamente. 
Es decir, el carácter tiene que repetirse uno tras otro.

Por ejemplo, /a+/g encontraría una coincidencia en abc y regresaría ["a"]. Debido al +, también encontraría una sola coincidencia en aabc 
y regresaría ["aa"].

Si en su lugar estuvieras comprobando la cadena "abab", se encontrarían dos coincidencias y regresaría ["a", "a"] porque los caracteres "a"
no están en fila; hay una "b" entre ellos. Finalmente, dado que no hay una "a" en la cadena "bcd", no se encontraría ninguna coincidencia.

Quieres encontrar coincidencias cuando la letra "s" ocurre una o más veces en "Mississippi". Escribe una expresión regular que utilice el signo +. */

let difficultSpelling = "Mississippi";
let myRegex3 = /s+/g; // Cambia esta línea
let result5 = difficultSpelling.match(myRegex3);
console.log(result5);

/* También hay una opción para hacer coincidir caracteres que aparecen cero o más veces.
El carácter que hace esto es el asterisco o la estrella: *. 

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";  */
// let goRegex = /go*/;
/* soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

En orden, los tres match devolverán los valores ["goooooooo"], ["g"], y null. 

Crea una expresión regular chewieRegex que utilice el carácter * para encontrar el carácter "A" mayúscula seguido inmediatamente por 
cero o más caracteres "a" minúscula en chewieQuote. Tu expresión regular no necesita banderas o clases de caracteres, y no debe coincidir 
con ninguna de las otras comillas. */

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";

let chewieRegex = /Aa*/; // Cambia esta línea

let result6 = chewieQuote.match(chewieRegex);
console.log(result6);




