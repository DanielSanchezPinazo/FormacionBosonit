
/* Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
La función debe tener 2 parámetros:

- Primer parámetro debe ser el número de bytes
- Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con 
    Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.  */

function fromBytesToFormattedSizeUnits(bytes, digTrunc = 3) {

    const integer = Math.abs(bytes).toString().split(/[.,]/g);
    const magnitude = integer[0].length;
    console.log(magnitude);
    const num = bytes.toPrecision(digTrunc);
    // console.log(num);
    

    // switch (magnitude) {

    //     case value:
            
    //         break;
    
    //     default:
    //         break;
    // }


    return num;

}


const result = fromBytesToFormattedSizeUnits(1000);
console.log(result); // 1KB

const result2 = fromBytesToFormattedSizeUnits(123456789);
console.log(result2); // 123MB

const result3 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result3); // -12.145GB



