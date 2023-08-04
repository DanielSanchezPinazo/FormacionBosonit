/* Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.
La función debe tener dos parámetros:

- El primer parámetro es el array entero que se quiere dividir.
- El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida el array original del primer parámetro. */

function splitArrayIntoChunks(arr, num){

    const times = Math.round(arr.length / num);
    // console.log(times);
    let newArr = [];
    let index = 0;


    for (let i = 0; i <= times; i++) {

        newArr.push(arr.slice(index, index + num));
        // console.log(index, index + num);
        index += num;
    }

    // console.log(newArr);
    return newArr;
}

const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]
