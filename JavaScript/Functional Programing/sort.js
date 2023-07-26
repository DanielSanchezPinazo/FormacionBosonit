/* El método sort ordena los elementos de un arreglo de acuerdo a la función callback.

Por ejemplo:

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);

Esto devolvería el valor de [1, 2, 3, 4, 5].

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);

Esto devolvería el valor de ['z', 's', 'l', 'h', 'b'].

Por defecto, JavaScript ordena basándose en el valor "Unicode" de la cadena de caracteres, lo cual puede dar resultados inesperados. Por lo tanto, 
se recomienda proporcionar una función callback para especificar como se deben ordenar los elementos del arreglo. Cuando se proporciona dicha función 
callback, normalmente llamada "compareFunction", los elementos del arreglo se ordenan de acuerdo al valor que devuelve la función "compareFunction": 
Si compareFunction(a,b) devuelve un valor menor que 0 para dos elementos "a" y "b", entonces "a" irá antes que "b". Si compareFunction(a,b) devuelve 
un valor mayor a 0 para dos elementos "a" y "b", entonces "b" irá antes que "a". Si compareFunction(a,b) devuelve un valor igual a 0 para dos elementos 
"a" y "b, entonces "a" y "b" se dejarán sin cambios.

Utiliza el método sort en la función "alphabeticalOrder" para ordenar los elementos de "arr" en orden alfabético. La función debe devolver el arreglo 
ordenado. */

function alphabeticalOrder(arr) {
    // Cambia solo el código debajo de esta línea
    // return arr;
    return arr.sort();
    // Cambia solo el código encima de esta línea
  }
  
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
console.log(alphabeticalOrder(["x", "h", "a", "m", "n", "m"]));
console.log(alphabeticalOrder(["a", "a", "a", "a", "x", "t"]));

/* Un efecto secundario del método "sort" es que cambia el orden de los elementos en el arreglo original. En otras palabras, muta el arreglo en su sitio. 
Una forma de evitar esto es concatenar primero un arreglo vacío al que está siendo ordenado (recuerda que "slice" y "concat" devuelven un nuevo arreglo), 
luego ejecutar el método "sort".

Utiliza el método sort en la función "nonMutatingSort" para ordenar los elementos de un arreglo en orden ascendente. La función debe devolver un nuevo 
arreglo y no mutar la variable "globalArray". */

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Cambia solo el código debajo de esta línea

    const newArr = arr.slice();
    return newArr.sort((a, b) => a - b);

  // Cambia solo el código encima de esta línea
}

nonMutatingSort(globalArray);
console.log(nonMutatingSort(globalArray));
console.log(nonMutatingSort([1, 30, 4, 21, 100000]));
console.log(nonMutatingSort([140000, 104, 99]));







