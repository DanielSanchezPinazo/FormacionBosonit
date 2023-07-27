/* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first. For example, sumAll([4,1]) should return 10 because sum of all the numbers between 
1 and 4 (both inclusive) is 10. */

function sumAll(arr) {
    let newArr = arr.slice();
    newArr.sort((a, b) => a - b);
    let sum = 0;
    console.log(newArr);
    
    while (newArr[0] <= newArr[1]) {

        sum+=newArr[0];
        newArr[0]++;
        // console.log(sum);       
    }

    return sum;
  }
  
sumAll([1, 4]);

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));


