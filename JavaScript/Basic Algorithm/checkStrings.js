/* Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the 
purpose of this challenge, we would like you to use one of the JavaScript substring methods instead. */

function confirmEnding(str, target) {

    // Create an index to start the search from the beginning of the target
    const index = str.length - target.length;

    // Check the match
    const key = str.indexOf(target, index);

    // Guide the returns
    if ( key !== -1 ) {

        return true;
    }

    return false;
  }
  
  confirmEnding("Bastian", "n");
  console.log(confirmEnding("Bastian", "n"));
  console.log(confirmEnding("Congratulation", "on"));
  console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
  console.log(confirmEnding("He has to give me a new name", "name"));
  console.log(confirmEnding("Open sesame", "same"));
  console.log(confirmEnding("Open sesame", "sage"));
  console.log(confirmEnding("Open sesame", "game"));
  console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));
  console.log(confirmEnding("Abstraction", "action"));


