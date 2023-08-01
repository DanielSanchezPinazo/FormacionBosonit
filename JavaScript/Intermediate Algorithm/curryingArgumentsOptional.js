/* Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and 
returns the sum. For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function. Calling this returned function 
with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5. If either argument isn't a valid number, return undefined. */

function addTogether() {


// Funciona para todo menos para console.log(addTogether(5)(7));
   /* let sum = 0;

    for (let i = 0; i < arguments.length; i++) {

        if (!Number.isInteger(arguments[i])) {

            return undefined;

        } else if (arguments.length <= 1) {

            return function () { };

        }

        sum += arguments[i];

    }

    return sum;*/

    const args = Array.from(arguments); // stores the function arguments in an array 

    const add = function (num) { // will be used for the case when addTogether is called with a single argument

      if (!Number.isInteger(num)) {

        return undefined;

      }
  
      return args.reduce((acc, curr) => acc + curr, num);// this allows the currying

    };
  
    if (args.some(arg => !Number.isInteger(arg))) {

      return undefined;

    }
  
    if (args.length > 1) {

      return args.reduce((acc, curr) => acc + curr, 0); // sum the value of "num" with all the elements in the "args" array (accumulator, current)
      
    }
  
    return add; // This allows us to invoke addTogether(5)(7). The first call addTogether(5) returns the add function, 
                //and then we can call it with the argument 7 to get the result 12.
}

console.log(addTogether(2, 3));
console.log(addTogether(23, 30));
console.log(addTogether("2", 3));
console.log(addTogether(5, undefined));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
console.log(addTogether(5));
console.log(addTogether(5)(7));
console.log(addTogether(2)([3]));
console.log(addTogether(2, "3"));


