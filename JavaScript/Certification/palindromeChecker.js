/* Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2. */

function palindrome(str) {

    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const mid = Math.floor(str.length/2);
    // console.log(str);
    // console.log(str.length);
    // console.log(mid);
    let first = "", second = "";

    if (str.length % 2 == 0) {

        first = str.slice(0, mid);
        // console.log(first);
        second = str.slice(mid, str.length).split("").reverse().join("");
        // console.log(second);

    } else {

        first = str.slice(0, mid);
        // console.log(first);
        second = str.slice(mid + 1, str.length).split("").reverse().join("");
        // console.log(second);

    }

    if (first == second) {

        return true;
        
    }

    return false;
  }
  
  console.log(palindrome("eye"));
  console.log(palindrome("_eye"));
  console.log(palindrome("race car"));
  console.log(palindrome("not a palindrome"));
  console.log(palindrome("A man, a plan, a canal. Panama"));
  console.log(palindrome("never odd or even"));
  console.log(palindrome("nope"));
  console.log(palindrome("almostomla"));
  console.log(palindrome("My age is 0, 0 si ega ym."));
  console.log(palindrome("1 eye for of 1 eye."));
  console.log(palindrome("0_0 (: /-\ :) 0-0"));
  console.log(palindrome("five|\_/|four"));
  
