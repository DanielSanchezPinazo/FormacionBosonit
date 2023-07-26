/* Al definir funciones dentro de objetos en ES5, tenemos que utilizar la palabra clave function de la siguiente manera:

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};

Con ES6, puedes eliminar la palabra clave function y los dos puntos al definir funciones en objetos. Aquí hay un ejemplo de esta sintaxis:

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};

Refactoriza la función setGear dentro del objeto bicycle para que utilice la sintaxis abreviada descrita arriba. */

// Cambia solo el código debajo de esta línea
// const bicycle = {
//     gear: 2,
//     setGear: function(newGear) {
//       this.gear = newGear;
//     }
//   };

const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };

  // Cambia solo el código encima de esta línea
  bicycle.setGear(3);
  console.log(bicycle.gear);

/* Un patrón común en JavaScript es la ejecución de una función apenas declarada:

(function () {
  console.log("Chirp, chirp!");
})();

Esta es una expresión de función anónima que se ejecuta de inmediato y produce Chirp, chirp! inmediatamente.
Ten en cuenta que la función no tiene nombre y que no se almacena en un valor. Los dos paréntesis () al final de la expresión de la función 
hacen que se ejecute o invoque de forma inmediata. Este patrón se conoce como una expresión de función inmediatamente invocada o IIFE (por 
sus siglas en inglés).

Reescribe la función "makeNest" y elimina su llamada, para que sea una expresión de función anónima inmediatamente invocada (IIFE). */

// function makeNest() {
//   console.log("A cozy nest is ready");
// }

// makeNest();

(function() {
  console.log("A cozy nest is ready");
})();

/* Una expresión de función inmediatamente invocada (IIFE) se utiliza a menudo para agrupar la funcionalidad relacionada en un solo objeto o módulo.
Por ejemplo se definen dos "mixins":

function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}

Podemos agrupar estos mixins en un módulo:

let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();

Ten en cuenta que has invocado una IIFE que devuelve un objeto "motionModule". El objeto devuelto contiene todos los comportamientos de los mixins
como propiedades del objeto. La ventaja del patrón del módulo es que todos los comportamientos de movimiento pueden ser empaquetados en un sólo 
objeto que puede ser usado por otras partes del código. Así se debe utilizar:

motionModule.glideMixin(duck);
duck.glide();

Crea un módulo llamado "funModule" para envolver los dos mixins "isCuteMixin" y "singMixin". "funModule" debe devolver un objeto. */

// let isCuteMixin = function(obj) {
//   obj.isCute = function() {
//     return true;
//   };
// };
// let singMixin = function(obj) {
//   obj.sing = function() {
//     console.log("Singing to an awesome tune");
//   };
// };

let funModule = (function(){
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();



