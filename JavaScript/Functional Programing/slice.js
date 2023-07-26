/* El método slice devuelve una copia de ciertos elementos de un arreglo. Puede tomar dos argumentos, el primero da el índice de dónde comenzar el corte,
el segundo es el índice de dónde terminar el corte (y no es inclusivo). Si no se proporcionan los argumentos, el valor predeterminado es comenzar desde 
el principio del arreglo hasta el final, la cual es una manera fácil de hacer una copia de todo el arreglo. El método slice no muta el arreglo original, 
pero devuelve uno nuevo. Por ejemplo:

const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);

"newArray" tendría el valor de ["Dog", "Tiger"].

Utiliza el método slice en la función sliceArray para retornar parte del arreglo "anim" dados los índices "beginSlice" y "endSlice". 
La función debe devolver un arreglo. */

function sliceArray(anim, beginSlice, endSlice) {
    // Cambia solo el código debajo de esta línea
  
    const newArr = anim.slice(beginSlice, endSlice);
    return newArr;
  
    // Cambia solo el código encima de esta línea
  }
  
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
console.log(sliceArray(inputAnim, 1, 3));
console.log(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1));
console.log(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4));

/* Un patrón común al trabajar con arreglos es cuando deseas eliminar elementos y conservar el resto del arreglo. JavaScript ofrece el método "splice" 
para esto, que toma argumentos para el índice de dónde comenzar a eliminar elementos, luego la cantidad de elementos para eliminar. Si no se proporciona 
el segundo argumento, el valor predeterminado es eliminar elementos hasta el final. Sin embargo, el método "splice" muta el arreglo original en el que 
se llama. Por ejemplo:

const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);

Aquí "splice" devluelve la string "London" y la elimina del arreglo "cities". "cities" tendrá el valor de ["Chicago", "Delhi", "Islamabad", "Berlin"].
Usar el método slice en lugar de splice ayuda a prevenir cualquier efecto colateral de mutar un arreglo.

Reescribe la función "nonMutatingSplice" usando "slice" en lugar de "splice". Debe limitar el arreglo proporcionado "cities" a una longitud de 3 y 
devolver un nuevo arreglo con solo los primeros tres elementos. No modifiques el arreglo original proporcionado en la función. */

function nonMutatingSplice(cities) {
  // Cambia solo el código debajo de esta línea
  // return cities.splice(3);
  const newArr = cities.slice(0, 3);
  return newArr;

  // Cambia solo el código encima de esta línea
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
console.log(nonMutatingSplice(inputCities));



