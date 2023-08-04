/* Crea una función que retorne los campos de un objeto que equivalgan a un valor “false” después de ser ejecutados por una función específica.
La función debe tener dos parámetros:
- Primer parámetro es un objeto con x número de campos y valores
- Segundo parametro es una función que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro  */

function returnFalsyValues(objct, func) {

    /*let result = [];

    for (const key in objct) {

        if (!func(objct[key])) {

            result.push([key, objct[key]]);           
        }
    }

    return result;*/
    
    let result = [];

    for (const key in objct) {

        const value = func(objct[key]);
        // console.log(value);

        if (!Boolean(value)) {

            result.push(key); //result.push([key, objct[key]]); por si se quiere retornar el valor además del campo           
        }
    }

    return result;
    
}

const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
console.log(result); // {a: 1, c: 3}
