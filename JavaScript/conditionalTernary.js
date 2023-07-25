/* The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, 
and c is the code to run when the condition returns false.

The following function uses an if/else statement to check a condition:  */

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}

// This can be re-written using the conditional operator:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}

// Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.

function checkEqual(a, b) {

    let result = a == b ? "Equal" : "Not Equal";
    console.log(result);
    return result;
}

checkEqual(1, 2);

/* En el desafío anterior, usaste un único operador condicional.
También puedes encadenarlos para comprobar múltiples condiciones.
La siguiente función utiliza sentencias if, else if, y else para comprobar múltiples condiciones: */

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}

//La función anterior puede ser reescrita utilizando múltiples operadores condicionales:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}

/* Se considera buena práctica dar formato a múltiples operadores condicionales de forma que cada condición 
esté en una línea separada, como se muestra arriba. Usar múltiples operadores condicionales sin una indentación 
adecuada puede hacer tu código difícil de leer. Por ejemplo: */

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}

/* En la función checkSign, usa múltiples operadores condicionales (siguiendo el formato recomendado usado 
en findGreaterOrEqual) para comprobar si un número es positivo, negativo o cero. La función debe devolver 
positive, negative o zero. */

function checkSign(num) {

    let result = (num > 0) ? "positive" 
        : (num < 0) ? "negative" 
        : "zero";
    console.log(result);
    return result;
}

checkSign(10);






