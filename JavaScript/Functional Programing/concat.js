/* Concatenation significa unir elementos de extremo a extremo. JavaScript ofrece el método "concat" para cadenas y arreglos, que funciona de la misma 
manera. Para arreglos, el método es llamado desde un arreglo, un segundo arrelgo es proporcionado como argumento de "concat", este se añadirá al final 
del primer arreglo. Devuelve un nuevo arreglo, sin mutar ninguno de los arreglos originales. Aquí hay un ejemplo:

[1, 2, 3].concat([4, 5, 6]);

El arreglo devuelto sería [1, 2, 3, 4, 5, 6].

Usa el método "concat" en la función "nonMutatingConcat" para concatenar "attach" al final de "original". La función deber devolver el arreglo concatenado. */

function nonMutatingConcat(original, attach) {
    // Cambia solo el código debajo de esta línea
  
    return original.concat(attach);
  
    // Cambia solo el código encima de esta línea
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingConcat(first, second);
  console.log(nonMutatingConcat(first, second));

/* La programación funcional consiste en crear y utilizar funciones "no mutantes". Compara "concat" con el método "push". "push" añade elementos al final 
del propio arreglo sobre el que es invocado, alterando dicho arreglo. Aquí hay un ejemplo:

const arr = [1, 2, 3];
arr.push(4, 5, 6);

"arr" habría sido modificado a [1, 2, 3, 4, 5, 6], hecho que no cumple con los principios de la programación funcional.
"concat" ofrece una manera de unir nuevos elementos al final del arreglo sin ningún efecto colateral.

Cambia la función "nonMutatingPush" de manera que utilice "concat" para unir "newItem" al final de original sin alterar los arreglos "original" o "newItem".
La función debe devolver un arreglo. */

function nonMutatingPush(original, newItem) {
    // Cambia solo el código debajo de esta línea
    // return original.push(newItem);
    return original.concat(newItem);
  
    // Cambia solo el código encima de esta línea
  }
  
//   const first = [1, 2, 3];
//   const second = [4, 5];
  nonMutatingPush(first, second);
  console.log(nonMutatingPush(first, second));


