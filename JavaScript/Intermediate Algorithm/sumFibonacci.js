/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum
of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, 
and 5. */

function sumFibs(num) {

    const fib = [0, 1]
    let sum = 0;
    while (fib[fib.length - 1] < num) {

        let next = fib[fib.length - 2] + fib[fib.length - 1];
        fib.push(next);
    }

    if (num == 1) {

        sum = 0;

    } else {

        fib.forEach( elem => {

                        if (elem <= num && elem%2 !== 0) {

                sum += elem;
        }});

        // for (let i = 0; i <= fib.length; i++) {


        //     if (fib[i] <= num && fib[i]%2 !== 0) {

        //         sum += fib[i];

        //     }
        // }

    };
    // console.log(fib);

    return sum;
}

console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
console.log(sumFibs(75025));



