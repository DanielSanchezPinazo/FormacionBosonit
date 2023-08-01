/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by
all sequential numbers in the range between these parameters. The range will be an array of two numbers that will 
not necessarily be in numerical order. For example, if given 1 and 3, find the smallest common multiple of both 
1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */

function smallestCommons(arr) {

    // At first, sorrt the array ascending

    arr.sort((a, b) =>  a - b);

    // create a variable with the highest value in the range, to store the smallest common multiple

    let scm = arr[1];

    // use the greatest common divisor formula we need to calculate the scm

    const gcd = (a, b) => {

        while (b !== 0) {

          const temp = b;
          b = a % b;
          a = temp;
        }
        return a;
    };

    // now we can calculate the smc of the 2 numbers

    const scmNums = (a, b) => (a * b) / gcd(a, b);
    
    for (let i = arr[1]; i >= arr[0]; i--) {

        scm = scmNums(scm, i);        
    }

    // console.log(arr);
    return scm;
  }
  
  console.log(smallestCommons([1, 5]));
  console.log(smallestCommons([5, 1]));
  console.log(smallestCommons([2, 10]));
  console.log(smallestCommons([1, 13]));
  console.log(smallestCommons([23, 18]));




