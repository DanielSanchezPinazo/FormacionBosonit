/* Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
La función debe tener un objeto como único parámetro. */

function toLowercaseKeys(objt) {

    const newObjt = {}

    for (let key in objt) {

        newObjt[key.toLowerCase()] = objt[key];
        
    };

    return newObjt;
    
}

let myObject = { NamE: 'Charles', ADDress: 'Home Street' };
// const myObjLowercase = myObject.toLowercaseKeys(); no funciona de esta forma porque la función no es un método de myObject
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }


