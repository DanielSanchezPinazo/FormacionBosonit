
/* Dado un array de objetos, obtener el objeto con el id 3 */

const arrNames = [
    {id: 1, name: 'Pepe'},
    {id: 2, name: 'Juan'},
    {id: 3, name: 'Alba'},
    {id: 4, name: 'Toby'},
    {id: 5, name: 'Lala'}
]

/*function find(arr, num) {

    let persona = {};

    arr.forEach( person => {

        // console.log(person.id);

        if (person.id == num) {
            // console.log(person);
            persona = person;
        }        
    });

    return persona;
}


console.log(find(arrNames, 3));*/

const person = arrNames.find(elem => elem.id === 3);

console.log(person);


