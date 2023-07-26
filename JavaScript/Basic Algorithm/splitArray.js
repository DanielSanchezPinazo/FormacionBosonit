/* Write a function that splits an array (first argument) into groups the length of size (second argument) and 
returns them as a two-dimensional array. */


function chunkArrayInGroups(arr, size) {

    const multi = [];
    let loops = arr.length;
    let count = 0;
    // console.log(arr);
    // console.log(arr.length);
    while (loops > 0 ) {

        multi[count] = arr.splice(0, size);
        loops -= size;
        count++;
        // console.log(loops);
        
    }

    arr = multi;

    return arr;
  }
  
//   chunkArrayInGroups(["a", "b", "c", "d"], 2);
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));



