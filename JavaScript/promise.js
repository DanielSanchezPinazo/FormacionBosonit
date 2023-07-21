/* Una promesa en JavaScript es exactamente como suena, se utiliza para hacer una promesa de que harás algo, habitualmente de forma asíncrona. 
Cuando la tarea se completa, o cumples tu promesa o no la cumples. Promise es una función constructora, así que tu necesitas usar la palabra 
clave new para crear una. Recibe una función como su argumento, con dos parámetros: resolve y reject. Estos métodos se utilizan para determinar 
el resultado de la promesa. Su sintaxis se ve así:

const myPromise = new Promise((resolve, reject) => { });

Crea una nueva promesa llamada makeServerRequest. Pásale una función con parámetros resolve y reject al constructor. */

const makeServerRequest3 = new Promise((resolve, reject) => {});

/* Una promesa tiene tres estados: "pending", "fulfilled", y "rejected". La promesa que creaste en el último desafío está atascada en el estado "pending" 
porque no añadiste una forma de completar la promesa. Los parámetros "resolve" y "reject" enviados a "promise" como argumentos, son utilizados para 
hacer lo siguiente. "resolve" se utiliza cuando quieres que tu promesa tenga éxito, y "reject" se usa cuando quieres que falle. Estos son métodos que 
toman un argumento, como se ve a continuación.

const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});

El ejemplo anterior utiliza cadenas como argumento de las funciones, pero podrían ser cualquier otra cosa. El argumento a menudo puede ser un objeto 
del cual utilizarás datos que mostrarás en tu sitio web o en otro lugar.

Haz una función promesa que maneje el éxito y el fallo. Si "responseFromServer" es "true", llama al método "resolve" para completar satisfactoriamente 
la promesa. Pasa a "resolve" una cadena con el valor "We got the data". Si "responseFromServer" es "false", utiliza el método "reject" y devuelve la 
cadena: "Data not received". */

const makeServerRequest2 = new Promise((resolve, reject) => {
    // responseFromServer representa una respuesta de un servidor
    let responseFromServer;
  
    if(responseFromServer) {
      // Cambia esta línea
      resolve("We got the data");
    } else {  
      // Cambia esta línea
      reject("Data not received");
    }
  });

/* Las promesas son muy útiles cuando tienes un proceso que toma una cantidad de tiempo desconocida en tu código (algo asíncrono por ejemplo), 
a menudo una petición de servidor. Cuando tu haces una petición a un servidor, toma algo de tiempo, después de que termina, normalmente quieres 
hacer algo con la respuesta del servidor. Esto se puede lograr utilizando el método "then". El método "then", se ejecuta inmediatamente después 
de que tu promesa se cumple con "resolve". A continuación un ejemplo:

myPromise.then(result => { });

"result" viene con el argumento proporcionado al método "resolve".

Añade el método "then" a tu promesa. Usa "result" como parámetro de tu función "callback", asimismo imprime "result" en la consola. */

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer es establecido a true para representar una respuesta satisfactoria del servidor
    let responseFromServer = true;
  
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });

makeServerRequest.then(result => { console.log(result); });

/* "catch" es el método utilizado cuando tu promesa ha sido rechazada. Se ejecuta inmediatamente, después de que se llama al método "reject" 
de una promesa. A continuación la sintaxis:

myPromise.catch(error => { });

"error" es el argumento pasado al método "reject".

Añade el método "catch" a tu promesa. Usa "error" como el parámetro de tu función "callback" e imprime "error" en la consola. */

makeServerRequest.catch(error => { console.log(error); });

