/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.
Note: You can return the array with its elements in any order. */

function diffArray(arr1, arr2) {
    const newArr = [];

    arr1.forEach(element => {

        if (arr2.includes(element)) {
            
        } else {

            newArr.push(element);
        }
        
    });

    arr2.forEach(element => {

        if (arr1.includes(element)) {
            
        } else {

            newArr.push(element);
        }
        
    });

    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
  console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
  console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
  console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
  console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
  console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));