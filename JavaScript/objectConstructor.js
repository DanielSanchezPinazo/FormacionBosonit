/* ES6 proporciona una nueva sintaxis para crear objetos, usando la palabra clave class.

En ES5, se puede crear un objeto definiendo una función constructor y usando la palabra clave new para instanciar el objeto.

En ES6, una declaración class tiene un método constructor que se invoca con la palabra clave new. Si el método constructor no
se define explícitamente, entonces se define implícitamente sin argumentos.

- Explicit constructor

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

- Implicit constructor 

class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle('Jupiter');
-- prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
-- prints To the moon! in console
atlas.launch();

Debe tenerse en cuenta que la palabra clave class declara una nueva función, a la cual se añade un constructor.
Este constructor se invoca cuando new es llamado para crear un nuevo objeto.

Nota: UpperCamelCase debe ser utilizado por convención para nombres de clase en ES6, como SpaceShuttle usado anteriormente.

El método constructor es un método especial para crear e inicializar un objeto creado con una clase. Aprenderás más sobre ello
en la sección de Programación Orientada a Objetos de la Certificación en Algoritmos de JavaScript y Estructuras de Datos.

Usa la palabra clave class y escribe un constructor para crear la clase Vegetable.

La clase Vegetable te permite crear un objeto vegetal con una propiedad name que es pasada al constructor. */


// Cambia solo el código debajo de esta línea

class Vegetable {
    constructor(name) {
        this.name = name
    };
}

// Cambia solo el código encima de esta línea

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Debería mostrar 'carrot'

 
/* La función por excelencia es el constructor. Las funciones Constructors crean nuevos objetos. Definen propiedades y 
comportamientos que pertenecerán al nuevo objeto. Piensa que son el modelo para la creación de nuevos objetos. 
Los constructores tienen las siguientes convenciones:

- Están definidos con un nombre en mayúscula para distinguirlos de otras funciones que no son constructors.
- Utilizan la palabra clave "this" para establecer propiedades del objeto que crearán. Dentro del constructor, "this" se refiere al nuevo objeto que creará.
- Los Constructors definen propiedades y comportamientos en vez de devolverlos como un valor, como lo harían otras funciones. 

Crea un constructor, Dog, con las propiedades name, color y numLegs que se establecen a una cadena, una cadena y un número respectivamente.  */

function Dog() {

  this.name = "Zula";
  this.color = "negro";
  this.numLegs = 4;
}

/* Aquí tenemos el constructor Bird:

function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
NOTA: this dentro del constructor siempre se refiere al objeto que se está creando.

Observa que se utiliza el operador new cuando llamamos a un constructor. Esto le indica a JavaScript que cree una nueva instancia de Bird 
llamada blueBird. Sin el operador new, dentro del constructor this no haría referencia al nuevo objeto, dando resultados inesperados. 
Ahora blueBird tiene todas las propiedades definidas dentro del constructor Bird:

blueBird.name;
blueBird.color;
blueBird.numLegs;

Al igual que cualquier otro objeto, sus propiedades pueden ser accedidas y modificadas:

blueBird.name = 'Elvira';
blueBird.name;

Utiliza el constructor "Dog" de la última lección para crear una nueva instancia de "Dog", asignándolo a una variable "hound". */

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Cambia solo el código debajo de esta línea

const hound = new Dog();

/* Crea otro constructor "Dog". Esta vez, configúralo para que tome los parámetros "name" y "color", y ten la propiedad "numLegs" fija a 4. 
Luego crea un nuevo "Dog" almacenado en una variable "terrier". Pasale dos cadenas de texto como argumentos para las propiedades "name" y "color". */


function Dog(name, color) {

  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

const terrier = new Dog("Duna", "gris");

/* Cada vez que una función constructora crea un nuevo objeto, se dice que ese objeto es una instancia de su constructor. JavaScript proporciona 
una manera conveniente de verificar esto con el operador "instanceof". "instanceof" permite comparar un objeto con un constructor, devuelve true 
o false basado en si ese objeto fue creado o no con dicho constructor. 

Crea una nueva instancia del constructor "House", llamándola "myHouse" y pasando el número de habitaciones. Luego, usa "instanceof" para verificar 
que es una instancia de "House".  */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Cambia solo el código debajo de esta línea

const myHouse = new House(3);

console.log(myHouse instanceof House);

/* En el siguiente ejemplo, el constructor Bird define dos propiedades: name y numLegs:

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
name y numLegs se llaman propiedades directas, porque están definidas directamente en la instancia del objeto. Eso significa que duck 
y canary tienen su propia copia separada de estas propiedades. De hecho, cada instancia de Bird tendrá su propia copia de estas propiedades.
El siguiente código añade todas las propiedades directas de duck al arreglo ownProps:

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);

La consola mostrará el valor ["name", "numLegs"]. Agrega todas las propiedades directas de canary al arreglo ownProps. */

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownPropsB = [];
// Cambia solo el código debajo de esta línea

for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownPropsB.push(property);
  }
}

console.log(ownPropsB);

/* Dado que "numLegs" probablemente tendrán el mismo valor para todas las instancias de "Bird", esencialmente tienes una variable duplicada "numLegs" 
dentro de cada instancia de Bird. Esto puede que no sea un problema cuando sólo hay dos instancias, pero imagina si hay millones de instancias. 
Eso sería un montón de variables duplicadas. Una mejor forma es utilizar el "prototype" de "Bird". Las propiedades del "prototype" se comparten entre 
TODAS las instancias de "Bird". A continuación se explica cómo añadir "numLegs" al prototipo "Bird prototype":

Bird.prototype.numLegs = 2;
Ahora todas las instancias de Bird tienen la propiedad numLegs.

console.log(duck.numLegs);
console.log(canary.numLegs);

Dado que todas las instancias tienen automáticamente las propiedades en el "prototype", piensa en "prototype" como una "receta" para crear objetos. 
Ten en cuenta que el "prototype" de "duck" y "canary" es parte del constructor "Bird" como "Bird.prototype".

Añade una propiedad "numLegs" al "prototype" de "Dog" */

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

// Cambia solo el código encima de esta línea
let beagle = new Dog("Snoopy");

/* Ahora has visto dos tipos de propiedades: propiedades directas y propiedades prototype. Las propiedades directas se definen directamente en la 
propia instancia del objeto. Y las propiedades prototype se definen en el prototype.

function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

A continuación, se explica cómo se agregan las propiedades directas de "duck" al arreglo "ownProps" y las propiedades prototype al arreglo "prototypeProps":

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);

"console.log(ownProps)"" debe mostrar ["name"] en la consola, y "console.log(prototypeProps)"" debe mostrar ["numLegs"].

Agrega todas las propiedades directas de "beagle" al arreglo "ownProps". Agrega todas las propiedades prototype de "Dog" al arreglo "prototypeProps". */

let ownProps = [];
let prototypeProps = [];

// Cambia solo el código debajo de esta línea

for (let property in beagle) {
  if(beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);

/* Hay una propiedad especial constructor ubicada en instancias de objeto duck y beagle que fueron creados en desafíos anteriores:

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);

Ambas llamadas console.log devolverían true en la consola. Ten en cuenta que la propiedad "constructor" hace referencia a la función "constructor" 
que creo la instancia. La ventaja de la propiedad "constructor" es que es posible verificar esta propiedad para averiguar qué tipo de objeto es. 
Así es como se podría utilizar:

function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}

Nota: dado que la propiedad "constructor" se puede sobreescribir, por lo general, es mejor utilizar el método "instanceof" para verificar 
el tipo de un objeto.

Escribe una función "joinDogFraternity" que tome como parámetro "candidate" y que con la propiedad "constructor", devuelva "true" si el candidato 
es un "Dog" y si no lo es debería devolver "false". */


// Cambia solo el código debajo de esta línea
function joinDogFraternity(candidate) {

  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }

}

/* Hasta ahora, has estado agregando propiedades al "prototype" (prototipo) individualmente:

Bird.prototype.numLegs = 2;
Esto se vuelve tedioso después de varias propiedades.

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}

Una forma más eficiente es establecer el "prototype" a un nuevo objeto que ya contenga las propiedades. De esta forma, las propiedades son añadidas 
todas a la vez:

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Agrega la propiedad "numLegs", y los dos métodos "eat()"" y "describe()"" al "prototype" de "Dog", estableciendo "prototype" a un nuevo objeto. */

Dog.prototype = {
  // Cambia solo el código debajo de esta línea
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

/* Hay un efecto secundario crucial de ajustar manualmente el prototipo a un nuevo objeto. ¡Elimina la propiedad constructor! Esta propiedad 
puede ser usada para verificar cuál función de constructor creó la instancia. Sin embargo, dado que la propiedad ha sido sobrescrita, ahora 
devuelve resultados falsos:

duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;

En orden, estas expresiones se evaluarían como false, true y true.

Para solucionar esto, cada vez que un prototipo se establece de forma manual a un nuevo objeto, recuerda definir la propiedad constructor:

Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};

Define la propiedad constructor en el Dog prototype. */

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

/* Así como las personas heredamos genes de nuestros padres, los objetos también heredan su "prototype" directamente de la función "constructor" 
que lo creó. Por ejemplo, aquí el constructor Bird crea el objeto duck:

function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");

"duck" hereda su "prototype" de la función constructor "Bird". Puedes mostrar esta relación con el método "isPrototypeOf":

Bird.prototype.isPrototypeOf(duck);

Este devolvería true. Utiliza isPrototypeOf para comprobar el prototype de "beagle". */


let beagle2 = new Dog("Snoopy"); // ya declaramos beagle antes

console.log( "Es beagle prototipo de Dog? " + Dog.prototype.isPrototypeOf(beagle2));

/* Todos los objetos en JavaScript (con algunas excepciones) tienen un prototype. Además, el prototype de un objeto en sí mismo es un objeto.

function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;

Debido a que prototype es un objeto, ¡unprototype puede tener su propio prototype! En este caso, el prototype de Bird.prototype es Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype);

¿Por qué sería útil? Quizás recuerdes el método hasOwnProperty del desafío pasado:

let duck = new Bird("Donald");
duck.hasOwnProperty("name");

El método hasOwnProperty se define en Object.prototype al cual se puede acceder con Bird.prototype, al que se puede acceder con duck. 
Este es un ejemplo de la cadena prototype. En esta cadena prototype, Bird es el supertype de duck mientras que duck es el subtype. 
Object es un supertype de Bird y duck. Object es un supertype de todos los objetos en JavaScript. Por lo tanto, cualquier objeto puede 
utilizar el método hasOwnProperty.

Modifica el código para mostrar la cadena de prototipos correcta. */

Object.prototype.isPrototypeOf(Dog.prototype);
console.log("Dog hereda prototipo de Object? " + Object.prototype.isPrototypeOf(Dog.prototype));

/* Hay un principio en la programación llamado No te repitas (Don't Repeat Yourself "DRY"). La razón por la que el código repetido es un 
problema es porque cualquier tipo de cambio requiere corregir código en múltiples lugares. Esto suele significar más trabajo para los 
programadores y más espacio para errores.

Observa en el siguiente ejemplo como el método describe es compartido por Bird y Dog:

Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

El método describe se repite en dos lugares. El código se puede editar para seguir el principio "DRY" creando un "supertype" (o padre) llamado Animal:

function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dado que Animal incluye el método "describe", puedes eliminarlo de "Bird" y "Dog":

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};

El método "eat" se repite tanto en "Cat" como "Bear". Edita el código utilizando el principio "DRY", moviendo el método "eat" al supertype "Animal". */

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat

};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

/* Vamos a reutilizar los métodos de Animal dentro de Bird y Dog sin tener que definirlos otra vez. Se utiliza una técnica llamada herencia. 
El primer paso: crear una instancia del supertype (o objecto padre). Ya conoces una forma de crear una instancia de Animal utilizando el operador new:

let animal = new Animal();

Hay algunas desventajas cuando se utiliza esta sintaxis para la herencia, pero son demasiado complejas. En su lugar, hay un enfoque alternativo que 
no tiene esas desventajas:

let animal = Object.create(Animal.prototype);

"Object.create(obj)" crea un objeto nuevo y establece "obj" como el prototype del nuevo objeto. Recuerda que prototype es como la "receta" para crear 
un objecto. Al establecer el prototype de "animal" como el prototype de "Animal", estás dándole a la instancia "animal" la misma “receta" que a cualquier 
otra instancia de Animal.

animal.eat();
animal instanceof Animal;

Aquí el método "instanceof" devolvería "true".

Utiliza "Object.create" para crear dos instancias de "Animal" llamadas "shark" y "cat". */

let shark = Object.create(Animal.prototype); 
let cat = Object.create(Animal.prototype);

shark.eat();
console.log(`shark es instancia de Animal? ${shark instanceof Animal}`);
console.log(`shark hereda prototipo de Animal? ${Animal.prototype.isPrototypeOf(shark.prototype)}`);

/* Ahora hay que establecer el prototipo "prototype" del subtipo (o hijo) —en este caso, "Bird"— para ser una instancia de "Animal".

Bird.prototype = Object.create(Animal.prototype);

Recuerda que el prototipo "prototype" es como la "receta" para crear un objeto. En cierto modo, la receta de "Bird" ahora incluye todos 
los "ingredientes" clave de Animal.

let duck = new Bird("Donald");
duck.eat();

"duck" hereda todas las propiedades de "Animal", incluyendo el método "eat".

Modifica el código para que las instancias de "Dog" hereden de "Animal". */

Dog.prototype = Object.create(Animal.prototype);

let cocker = new Dog();
cocker.eat();
console.log("cocker hereda prototipo de Animal? " + Animal.prototype.isPrototypeOf(cocker.prototype));
console.log(`cocker es instancia de Animal? ${cocker instanceof Animal}`);
console.log(`cocker hereda prototipo de Dog? ${Dog.prototype.isPrototypeOf(cocker.prototype)}`);

/* Cuando un objeto hereda el prototype de otro objeto, también hereda la propiedad del constructor del supertipo. Por ejemplo:

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor

Pero "duck" y todas las instancias de "Bird" deberían mostrar que fueron construidas por "Bird" y no "Animal". Para ello, puedes establecer 
manualmente la propiedad del constructor de "Bird" al objeto "Bird":

Bird.prototype.constructor = Bird;
duck.constructor

Corrige el código para que duck.constructor y beagle.constructor devuelvan sus constructores respectivos. */

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Cambia solo el código debajo de esta línea

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird(); // Antes de introducir estas líneas sus constructores era Animal
let bulldog = new Dog();

console.log(duck.constructor);
console.log(bulldog.constructor);
console.log("Antes sus constructores era Animal.");

/* Una función constructor que hereda su objeto prototype de una función constructor "supertype" puede seguir teniendo sus propios métodos además 
de los heredados.
Por ejemplo, Bird es un constructor que hereda su prototype de Animal:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Además de lo que se hereda de Animal, se quiere añadir un comportamiento que sea exclusivo de los objetos Bird. Aquí, Bird obtendrá una función fly().
Las funciones se añaden al prototype de Bird's del mismo modo que cualquier función constructor:

Bird.prototype.fly = function() {
  console.log("I'm flying!");
};

Ahora las instancias de Bird tendrán métodos tanto eat() como fly():

let duck = new Bird();
duck.eat();
duck.fly();

duck.eat() mostrará la cadena nom nom nom en consola, y duck.fly() mostrará la cadena I'm flying!.

Añade el código necesario para que el objeto "Dog" herede de "Animal" y el constructor prototype de "Dog" sea establecido en "Dog". A continuación 
agrega el método bark() al objeto "Dog", para que "rotweiler" pueda "comer" eat() y "ladrar" bark(). El método bark() debe imprimir Woof! por consola.  */

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log("Woof!");  
}

let rotweiler = new Dog();
rotweiler.bark();

/* Has aprendido que un objeto puede heredar su comportamiento (métodos) de otro objeto al referenciar su prototype:

ChildObject.prototype = Object.create(ParentObject.prototype);

Luego, el ChildObject recibió sus propios métodos al encadenarlos a su prototype:

ChildObject.prototype.methodName = function() {...};

Es posible sobreescribir un método heredado. Se hace de la misma manera: agregando un método a ChildObject.prototype usando el mismo nombre de método 
que el que se va a sobrescribir. Aquí hay un ejemplo de Bird sobrescribiendo el método eat() heredado de Animal:

function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};

Si tienes una instancia de let duck = new Bird(); y llamas a duck.eat(), así es como JavaScript busca el método en la cadena prototype de duck:

duck => ¿Está eat() definido aquí? No.
Bird => ¿Está eat() definido aquí? => Sí. Ejecútala y detén la búsqueda.
Animal => eat() también está definido, pero JavaScript dejó de buscar antes de llegar a este nivel.
Object => JavaScript dejó de buscar antes de llegar a este nivel.

Sobrescribe el método fly() para Penguin de manera que devuelva la cadena de texto "Alas, this is a flightless bird." */

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Cambia solo el código debajo de esta línea

console.log(Penguin.prototype.fly());
Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird."
};

// Cambia solo el código encima de esta línea

let penguin = new Penguin();
console.log(penguin.fly());

/* Hay algunos casos en los que la herencia no es la mejor opción. La herencia no funciona bien con objetos que no están relacionados como Bird 
y Airplane. Ambos pueden volar pero un Bird no es un tipo de Airplane y viceversa.
Para objetos no relacionados es mejor utilizar "mixins". Un "mixin" permite a otros objetos utilizar una colección de funciones.

let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};

El flyMixin toma a cualquier objeto y le da el método fly.

let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

Aquí "bird" y "plane" son pasados a flyMixin el cual después asigna la función fly a cada objeto. Ahora "bird" y "plane" pueden volar:

bird.fly();
plane.fly();

La consola mostraría la cadena "Flying, wooosh!" dos veces, una por cada llamada a .fly().
Ten en cuenta cómo el mixin permite que el mismo método "fly" sea reutilizado por los objetos "bird" y "plane" los cuales no están relacionados.
Crea un mixin llamado "glideMixin" que defina un método llamado "glide". Luego utiliza el "glideMixin" para dar a "bird" y "plane" la habilidad de planear.*/

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Cambia solo el código debajo de esta línea

let glideMixin = function(obj) {

  obj.glide = function() {
    console.log("Estoy planeando.");
  }
}

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();

/* En el desafío anterior, "bird" tenía una propiedad pública "name". Se considera pública porque se puede acceder y cambiar fuera de la definición de "bird".

bird.name = "Duffy";

Por lo tanto, cualquier parte de tu código puede cambiar fácilmente el nombre "name" de bird a cualquier valor. Piensa en cosas como contraseñas y 
cuentas bancarias que se pueden cambiar fácilmente por cualquier parte de tu base de código. Eso podría crear muchos problemas.
La forma más sencilla de hacer privada esta propiedad pública es creando una variable dentro de la función constructora. Esto cambia el alcance de 
esa variable para que esté dentro de la función constructora versus disponible globalmente. De este modo, la variable solo puede ser accesible y 
cambiable por métodos que también estén dentro de la función constructora.

function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();

Aquí "getHatchedEggCount" es un método privilegiado, porque tiene acceso a la variable privada "hatchedEgg". Esto es posible porque "hatchedEgg" 
está declarada en el mismo contexto que "getHatchedEggCount". En JavaScript, una función siempre tiene acceso al contexto en el que se creó. A esto 
se le llama "closure".

Cambia como "weight" es declarada en la función "Bird" para que sea una variable privada. Después, crea un método "getWeight" que devuelva el valor 
15 para "weight". */

function Bird() {
  // this.weight = 15;
  let weight = 15;

  this.getWeight = function() {
    return weight;
  };
}





