/* Ahora que has superado algunos desafíos usando funciones de orden superior como map(), filter(), y reduce(), ahora puedes aplicarlos para resolver 
un desafío más complejo. Completa el código para la función "squareList" usando cualquier combinación de map(), filter(), y reduce(). La función debe 
devolver un nuevo arreglo que contenga los cuadrados de solamente los enteros positivos (números decimales no son enteros) cuando se le pasa un arreglo 
de números reales. Un ejemplo de un arreglo que contiene números reales es [-3, 4.8, 5, 3, -3.2].

Nota: Tu función no debe usar ningún tipo de bucle for o while o la función forEach(). */

const squareList = arr => {
    // Cambia solo el código debajo de esta línea
    const newArr = arr.filter(num => num > 0 && num%1 == 0).map( num => num*num);
    return newArr;
    // Cambia solo el código encima de esta línea
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
  console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]));
  console.log(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]));





