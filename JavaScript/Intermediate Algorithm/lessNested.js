/* Flatten a nested array. You must account for varying levels of nesting. 
Note: Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
Note: Global variables should not be used. */



function steamrollArray(arr) {

    const flatted = [];

    function flatArray(array) {

        array.forEach( element => {

        // if it's an Array again, use recursive function, if not push it to "flatted"

            if (Array.isArray(element)) {
                
                flatArray(element);

            } else {

                flatted.push(element);

            }
        });
    }

    flatArray(arr);

    return flatted;
}

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));





