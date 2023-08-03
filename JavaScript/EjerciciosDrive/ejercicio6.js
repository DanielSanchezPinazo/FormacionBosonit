
/* Crea una función que redondee un número float a un número específico de decimales. La función debe tener dos parámetros: 

- Primer parámetro es un número float con x decimales
- El segundo parámetro es un int que indique el número de decimales al que redondear

Evitar usar el método toFixed(). */

function roundTo(float, dec) {

    let arr = float.toString().split(".");
    // console.log(arr);
    arr[1] = arr[1].substring(0, dec);
    arr = arr.join(".");
    // console.log(arr);
    /*let num =*/return parseFloat(arr);
    // console.log(typeof num);

    // Otra forma de hacerlo
    // const potencia = Math.pow(10, dec);
    // return Math.trunc(float * potencia) / potencia;

}


const roundedResult = roundTo(2.123, 2);
console.log(roundedResult); // 2.12

const roundedResult2 = roundTo(1.123456789, 6);
console.log(roundedResult2); // 1.123457
