/* La sintaxis de desestructuración es una sintaxis especial introducida en ES6, para asignar los valores directamente desde un objeto.

Considera el siguiente código ES5:

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
name tendría una cadena con valor John Doe, y age tendría el número 34.

Aquí hay una sentencia de asignación equivalente usando la sintaxis de desestructuración de ES6:

const { name, age } = user;
De nuevo, name tendrá una cadena con valor John Doe, y age tendrá el número 34.

Aquí, las variables name y age serán creadas y se asignarán los valores respectivos a partir del objeto user. Puedes observar que esto es mucho más limpio.

Puedes extraer tantos o pocos valores del objeto como desees.

Reemplaza las dos asignaciones con una sintaxis de desestructuración equivalente. Todavía deben seguir asignando las variables today
y tomorrow con los valores de today y tomorrow del objeto HIGH_TEMPERATURES.*/

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Cambia solo el código debajo de esta línea
//   const today = HIGH_TEMPERATURES.today;
//   const tomorrow = HIGH_TEMPERATURES.tomorrow;
const {today, tomorrow} = HIGH_TEMPERATURES;
console.log(today, tomorrow);

  // Cambia solo el código encima de esta línea

/*  Reemplace las dos asignaciones con una asignación de desestructuración equivalente. Todavía debe asignar las variables highToday y highTomorrow los valores de today y tomorrow
  desde el HIGH_TEMPERATURESobjeto. */

// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

    const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
    console.log(highToday, highTomorrow);

/* Reemplace las dos asignaciones con una asignación de desestructuración equivalente. Todavía debe asignar las variables lowTodayy highTodaylos valores de today.lowy today.highdesde
el LOCAL_FORECASTobjeto.  */

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    
//   const lowToday = LOCAL_FORECAST.today.low;
//   const highToday = LOCAL_FORECAST.today.high;

    const { today: { low: lowToday, high: highToday2 }} = LOCAL_FORECAST;
    console.log(lowToday, highToday2);
  
  // Only change code above this line

/* También podemos acceder al valor en cualquier índice en una matriz con desestructuración usando comas para alcanzar el índice deseado:

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
La consola mostrará los valores de a, by cas 1, 2, 5.

Use la asignación de desestructuración para intercambiar los valores de a y b para que a reciba el valor almacenado en b, y b reciba el valor almacenado en a. */

let a = 8, b = 6;
// Only change code below this line

[a, b] = [b, a];

console.log(a, b);

/* En algunas situaciones que implican la desestructuración de arreglos, tal vez queramos recolectar el resto de elementos en un arreglo separado.

El resultado es similar a Array.prototype.slice(), como se muestra a continuación:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
La consola mostrará los valores 1, 2 y [3, 4, 5, 7].

Las variables a y b toman el primer y segundo valor del arreglo. Luego de esto, debido a la presencia de sintaxis rest arr obtiene el rest de los valores en forma de un arreglo.
El elemento rest sólo funciona correctamente como la última variable en la lista. Es decir, no se puede utilizar la sintaxis rest para capturar un sub arreglo que deje fuera el
último elemento del arreglo original.

Utiliza una asignación de desestructuración con la sintaxis rest para emular el comportamiento de Array.prototype.slice(). removeFirstTwo() debe devolver un sub arreglo del arreglo
original list con los dos primeros elementos omitidos. */

function removeFirstTwo(list) {
    // Cambia solo el código debajo de esta línea
    const [ , ,...shorterList] = list;     // Cambia solo el código encima de esta línea
    console.log(shorterList);
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);


/* Utiliza sintaxis de desestructuración para pasar un objeto como parámetro de función
En algunos casos, se puede desestructurar el objeto en un propio argumento de función.

Considera el siguiente código:

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}

Esto desestructura efectivamente el objeto enviado a la función. Esto también se puede hacer en el lugar:

const profileUpdate = ({ name, age, nationality, location }) => {

}

Cuando profileData es pasado a la función anterior, los valores son desestructurados desde el parámetro de función para su uso dentro de la función.

Utiliza la sintaxis de desestructuración dentro del argumento de la función half para enviar solo max y min dentro de la función. */

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
  
// Cambia solo el código debajo de esta línea
//   const half = (stats) => (stats.max + stats.min) / 2.0;
    const half = ({max, min}) => ((max + min) / 2.0);
    console.log(half(stats));
// Cambia solo el código encima de esta línea

