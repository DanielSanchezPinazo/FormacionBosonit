
/* Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
La función debe tener 2 parámetros:

- Primer parámetro debe ser el número de bytes
- Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con 
    bytesber.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.  */

function fromBytesToFormattedSizeUnits(bytes, digTrunc = 3) {

//     let integer = bytes.toString().split(/[.,]/g);
//     integer = integer[0];
//     let magnitude = 0;

//     if (bytes > 0) {

//         integer = integer.substring(0, digTrunc);
//         // magnitude = integer.length - digTrunc;

//     } else {

//         integer = integer.substring(0, digTrunc+1);
//         // magnitude = (integer.length - 1) - digTrunc;

//     }

//     console.log(integer);
//     console.log(magnitude);

//     // devuelve resultados exponenciales que no se cómo controlar
//     // const bytes = bytes.toPrecision(digTrunc); 
   
//     let count = -1;
    
//     for (let i = Math.abs(bytes); i >= 1; i/= 1000) {

//         count++;
//     }

//     console.log(count);

//     // switch (magnitude) {

//     //     case value:
            
//     //         break;
    
//     //     default:
//     //         break;
//     // }

//     return integer;

//---------------------------------------------------------------------------------

// const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
// let unitIndex = 0;

// while (Math.abs(bytes) >= 1024 && unitIndex < units.length - 1) {

//   bytes /= 1024;
//   unitIndex++;
// }

// const result = bytes < 0 ? -bytes : bytes;

// const formattedResult = result.toPrecision(digTrunc);//.replace(/\.0+$/, '');

// return formattedResult + units[unitIndex];


// const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
// let exponent = -1;
// while (bytes >= 1024) {
//   bytes /= 1024;
//   exponent++;
// }
// return `${bytes.toFixed(digTrunc)}${units[exponent]}`;
  

let result = bytes.toPrecision(digTrunc);

//Se divide en el resultado para quitar la notación científica.
if (Math.abs(bytes) < Math.pow(10, 3)) {
  result = result / Math.pow(10, 0) + "B";
} else if (Math.abs(bytes) < Math.pow(10, 6)) {
  result = result / Math.pow(10, 3) + "KB";
} else if (Math.abs(bytes) < Math.pow(10, 9)) {
  result = result / Math.pow(10, 6) + "MB";
} else if (Math.abs(bytes) < Math.pow(10, 12)) {
  result = result / Math.pow(10, 9) + "GB";
} else if (Math.abs(bytes) < Math.pow(10, 15)) {
  result = result / Math.pow(10, 12) + "TB";
} else if (Math.abs(bytes) < Math.pow(10, 18)) {
  result = result / Math.pow(10, 15) + "PB";
} else if (Math.abs(bytes) < Math.pow(10, 21)) {
  result = result / Math.pow(10, 18) + "EB";
} else if (Math.abs(bytes) < Math.pow(10, 24)) {
  result = result / Math.pow(10, 21) + "ZB";
} else {
  result += "YB";
}

return result;

}

const result = fromBytesToFormattedSizeUnits(1000);
console.log(result); // 1KB

const result2 = fromBytesToFormattedSizeUnits(123456789);
console.log(result2); // 123MB

const result3 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result3); // -12.145GB



