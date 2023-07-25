/* Hemos definido una función, filteredArray, que toma arr, un arreglo anidado, y elem como argumentos, 
y devuelve un nuevo arreglo. elem representa un elemento que puede o no estar presente en uno o más de los 
arreglos anidados dentro de arr. Modifica la función, usando un bucle for, para que devuelva una versión 
filtrada del arreglo pasado de forma que cualquier arreglo anidado dentro de arr que contenga elem haya sido 
eliminado. */

function filteredArray(arr, elem) {
    let newArr = [];
    // Cambia solo el código debajo de esta línea
  
    for (let i = 0; i < arr.length; i++) {

        // console.log("i: "+i);
        // console.log(arr[i].indexOf(elem));
        if (arr[i].indexOf(elem) == -1) {
            
            newArr.push(arr[i]);
        }   
    }
    // Cambia solo el código encima de esta línea
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
  console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2));
  console.log(filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter"));

