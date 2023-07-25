/* You are given two arrays and an index. Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs. */

function frankenSplice(arr1, arr2, n) {

    // let frankeArr = arr2;
    let frankeArr = arr2.slice();
    frankeArr.splice(n, 0, ...arr1);
    // console.log(frankeArr);
    return frankeArr;
  }
  
//   frankenSplice([1, 2, 3], [4, 5, 6], 1);
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
  console.log(frankenSplice([1, 2, 3], [4, 5], 1));
  console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
  console.log(frankenSplice([1, 2, 3, 4], [], 0)); 
