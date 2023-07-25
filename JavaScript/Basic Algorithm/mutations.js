/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return "true" because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return "false" because the string "hello" does not contain a "y".
Lastly, ["Alien", "line"], should return "true" because all of the letters in "line" are present in "Alien". */

function mutation(arr) {

    const result = false;
    const count = 0;
    arr = [arr[0].toLowerCase(), arr[1].toLowerCase()];
    // const word1 = arr[0].toLowerCase();
    // const word2 = arr[1].toLowerCase();
    console.log(arr);

    

    return result;
  }
  

  console.log(mutation(["hello", "hey"]));
  console.log(mutation(["hello", "Hello"]));
  console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
  console.log(mutation(["Mary", "Army"]));
  console.log(mutation(["Mary", "Aarmy"]));
  console.log(mutation(["Alien", "line"]));
  console.log(mutation(["floor", "for"]));
  console.log(mutation(["hello", "neo"]));
  console.log(mutation(["voodoo", "no"]));
  console.log(mutation(["ate", "date"]));
  console.log(mutation(["Tiger", "Zebra"]));
  console.log(mutation(["Noel", "Ole"]));
  
  


