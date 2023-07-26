/* El método "every" funciona con arreglos para comprobar si cada elemento pasa una prueba en particular. Devuelve un valor booleano - "true" si todos 
los valores cumplen los criterios, "false" si no. Por ejemplo, el siguiente código comprobaría si cada elemento en el arreglo numbers es menor a 10:

const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});

El método "every" devolvería "false" aquí.
Utiliza el método "every" dentro de la función "checkPositive" para comprobar si cada elemento en "arr" es positivo. La función debe devolver un valor 
booleano. */

function checkPositive(arr) {
    // Cambia solo el código debajo de esta línea
    
    return arr.every( num => num > 0 );
  
    // Cambia solo el código encima de esta línea
  }
  
  checkPositive([1, 2, 3, -4, 5]);
  console.log(checkPositive([1, 2, 3, -4, 5]));
  console.log(checkPositive([1, 2, 3, 4, 5]));
  console.log(checkPositive([1, -2, 3, -4, 5]));





