/* En su aspecto más básico, los objetos no son más que colecciones de pares clave-valor. En otras palabras, 
son piezas de datos (valores) asignados a identificadores únicos llamados propiedades (claves). Mira un ejemplo: */

const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
/* El código anterior define un objeto de un personaje del videojuego Tekken como tekkenCharacter.
Tiene tres propiedades, cada una de las cuales se asigna un valor específico. Si se quiere agregar una propiedad 
adicional, como "origin" (origen), se puede hacer asignando origin al objeto:  */

tekkenCharacter.origin = 'South Korea';

/*  Esto usa la notación de puntos. Si observas el objeto tekkenCharacter, ahora incluirá la propiedad origin. 
Hwoarang también tenía el cabello naranja. Puedes agregar esta propiedad con la notación de corchetes:  */

tekkenCharacter['hair color'] = 'dyed orange';

/*  La notación de corchetes es necesaria si tu propiedad tiene un espacio en ella o si se quiere utilizar una 
variable para nombrar la propiedad. En el caso anterior, la propiedad está entre comillas para denotar que es 
una cadena y se agregará exactamente como se muestra. Sin las comillas, se evaluará como una variable y el nombre 
de la propiedad será el valor que tenga la variable. He aquí un ejemplo con una variable:  */

const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';

/* Tras agregar todos los ejemplos, el objeto se verá así:

{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
}; */

console.log(tekkenCharacter);

/* Las propiedades de los objetos pueden anidarse a una profundidad arbitraria, y sus valores pueden ser 
cualquier tipo de datos soportados por JavaScript, incluyendo arreglos e incluso otros objetos. 
Considera lo siguiente: */

let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
/* nestedObject tiene tres propiedades: "id" (el valor es un número), "date" (el valor es una cadena), 
y "data" (el valor es un objeto con su estructura anidada). Aunque las estructuras pueden volverse rápidamente 
complejas, podemos seguir utilizando las mismas notaciones para acceder a la información que necesitamos. 
Para asignar el valor 10 a la propiedad "busy" del objeto anidado "onlineStatus", utilizamos la notación de puntos 
para referenciar la propiedad: */

nestedObject.data.onlineStatus.busy = 10;
console.log(nestedObject);

/* En el primer desafío de objetos mencionamos el uso de notación de corchetes como una manera de acceder a los 
valores de una propiedad mediante la evaluación de una variable. Por ejemplo, imagina que nuestro objeto foods 
está siendo usado en un programa para una caja registradora de supermercado. Tenemos una función que establece 
selectedFood y queremos revisar en nuestro objeto foods si ese alimento está presente. Esto podría verse así:

let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];

El código evaluará el valor almacenado en la variable selectedFood y devolverá el valor de esa clave en el objeto 
foods, o undefined si no está presente. La notación de corchetes es muy útil porque a veces no conocemos las 
propiedades de los objetos antes de la ejecución o necesitamos acceder a ellos de una manera más dinámica.

Hemos definido una función, checkInventory, que recibe como argumento un elemento escaneado. Devuelve el valor 
actual de la clave scannedItem en el objeto foods. Puedes asumir que sólo se proporcionarán claves válidas como 
argumento a checkInventory. */

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  console.log(foods);

  function checkInventory(scannedItem) {
    // Cambia solo el código debajo de esta línea
    return foods[scannedItem];
    // Cambia solo el código encima de esta línea
  }
  
  console.log(checkInventory("apples"));

/* Aquí veremos cómo podemos eliminar un par clave-valor de un objeto.
Volvamos a nuestro ejemplo del objeto foods una última vez. Si quisiéramos eliminar la clave apples, 
podemos eliminarla utilizando la palabra clave delete de esta manera:

delete foods.apples;

Usa la palabra clave delete para eliminar las claves oranges, plums y strawberries del objeto foods. */

  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
  console.log(foods);

/* Ahora podemos agregar, modificar y eliminar claves de los objetos. Pero, ¿y si sólo queremos saber si un 
objeto tiene una propiedad específica? JavaScript nos proporciona dos maneras diferentes de hacerlo. Uno 
utiliza el método "hasOwnProperty()" y el otro utiliza la palabra clave "in". Si tenemos un objeto "users" con una 
propiedad de "Alan", podríamos comprobar su presencia de cualquiera de las siguientes maneras:

users.hasOwnProperty('Alan');
'Alan' in users;

Ambos devuelven "true".

Termina de escribir la función para que devuelva "true" si el objeto pasado contiene los cuatro nombres: "Alan", 
"Jeff", "Sarah" and "Ryan" y devuelva "false" en caso contrario. */

let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Cambia solo el código debajo de esta línea
    if (userObj.hasOwnProperty('Alan') && "Jeff" in userObj && userObj.hasOwnProperty('Sarah') && 'Ryan' in userObj) {
        return true;
    }
    return false;
    // Cambia solo el código encima de esta línea
  }
  
  console.log(isEveryoneHere(users));

/* A veces es necesario iterar a través de todas las claves dentro de un objeto. Puede usar un bucle "for...in" 
para hacer esto. El bucle "for...in" se ve así:

const refrigerator = {
  'milk': 1,
  'eggs': 12,
};

for (const food in refrigerator) {
  console.log(food, refrigerator[food]);
}

Este código registra "milk 1" y "eggs 12", con cada par clave-valor en su propia línea.

Definimos la variable "food" en el encabezado del ciclo y esta variable se configuró en cada una de las claves 
del objeto en cada iteración, lo que resultó en que el nombre de cada alimento se imprimiera en la consola.
NOTA: Los objetos no mantienen un orden para las claves almacenadas como lo hacen los arreglos; por lo tanto, 
la posición de una clave en un objeto, o el orden relativo en el que aparece, es irrelevante cuando se hace 
referencia o se accede a esa clave.

Hemos definido una función "countOnline" que acepta un argumento, "allUsers". Utilice una instrucción "for...in"
dentro de esta función para recorrer el objeto "allUsers" y devolver el número de usuarios cuya propiedad "online" 
está establecida en "true". */

const users2 = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    // Cambia solo el código debajo de esta línea
    let count = 0;
    for (const key in allUsers) {
        
        // console.log(allUsers[key]["online"]);
        if (allUsers[key]["online"] == true) {
            
            count++;
            // console.log(count);      
        }
    }

    return count;
    // Cambia solo el código encima de esta línea
  }
  
  console.log(countOnline(users2));

/* También podemos generar un arreglo que contenga todas las claves almacenadas en un objeto utilizando el
método "Object.keys()". Este método toma un objeto como argumento y devuelve un arrelgo de cadenas que representan 
cada propiedad en el objeto. De nuevo, no habrá un orden específico para las entradas en el arreglo.

Termina de escribir la función "getArrayOfUserspara" que devuelva un arreglo que contenga todas las propiedades 
del objeto que recibe como argumento. */

let users3 = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // Cambia solo el código debajo de esta línea
    
    return Object.keys(obj);

    // Cambia solo el código encima de esta línea
  }
  
  console.log(getArrayOfUsers(users3));

/* Puede agregar, modificar y eliminar pares clave-valor, comprobar si las claves existen e iterar sobre todas 
las claves de un objeto. A medida que sigas aprendiendo JavaScript verás aplicaciones aún más versátiles de los 
objetos. Además, las lecciones de "Estructuras de Datos" ubicados en la sección "Coding Interview Prep" del plan 
de estudios también cubren los objetos "Map" y "Set" de "ES6", los cuales son similares a los objetos ordinarios, 
pero ofrecen algunas características adicionales.

Echa un vistazo al objeto "user", contiene tres claves. La clave "data" contiene cinco claves, una de las cuales 
contiene un arreglo de "friends". A partir de esto, puedes ver lo flexibles que son los objetos como estructuras 
de datos. Hemos comenzado a escribir una función "addFriend". Termina de escribirla para que tome un objeto "user" 
y agregue el nombre del argumento "friend" al arreglo almacenado en "user.data.friends" y devuelva ese arreglo. */

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
//   console.log(user.data.friends);

  function addFriend(userObj, friend) {
    // Cambia solo el código debajo de esta línea
    
    userObj.data.friends.push(friend);
    return userObj.data.friends;

    // Cambia solo el código encima de esta línea
  }
  
  console.log(addFriend(user, 'Pete'));






