/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {

    // Utilizamos una expresión regular para encontrar los límites entre palabras y caracteres especiales
    
    return str
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Agrega espacios entre camelCase
    .replace(/\s+|_+/g, "-") // Reemplaza espacios y guiones bajos con guiones
    .toLowerCase(); // Convierte todo a minúsculas
  }
  
spinalCase('This Is Spinal Tap');

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
  
  





