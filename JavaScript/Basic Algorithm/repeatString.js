/* Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. 
For the purpose of this challenge, do not use the built-in .repeat() method. */

function repeatStringNumTimes(str, num) {

let result = "";

    if (num > 0) {
        for (let i = 0; i < num; i++) {
            
        // console.log(str);
        result += str;
            
        }
    } else {

        str = "";
    }
    return result;
  }
  
//   repeatStringNumTimes("abc", 3);
  console.log(repeatStringNumTimes("abc", 3));
  console.log(repeatStringNumTimes("*", 3));
  console.log(repeatStringNumTimes("abc", 4));
  console.log(repeatStringNumTimes("abc", 1));
  console.log(repeatStringNumTimes("*", 8));
  console.log(repeatStringNumTimes("abc", -2));
  console.log(repeatStringNumTimes("abc", 0));