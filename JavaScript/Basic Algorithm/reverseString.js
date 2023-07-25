/* Reverse the provided string and return the reversed string.
For example, "hello" should become "olleh". */

function reverseString(str) {

    const arr = Array.from(str);
    arr.reverse();
    str = arr.join("");

    return str;
  }
  
  reverseString("hello");
  console.log(reverseString("hello"));
  console.log(reverseString("Howdy"));
  console.log(reverseString("Greetings from Earth"));



