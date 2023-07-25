/* Return the length of the longest word in the provided sentence.
Your response should be a number. */

function findLongestWordLength(str) {

    // At first we separate the words by space and store it in a constant.
    const arrayWords = str.split(" ");
    // console.log(arrayWords);
console.log(arrayWords);
    // Define and initialize the constant that will store the longest word.
    let longuest = "";

    // Create a loop which compares words
    for (let i = 0; i < arrayWords.length; i++) {
        
        if (arrayWords[i].length > longuest.length) {
            
            longuest = arrayWords[i];
        }  
    }

    return longuest.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  console.log(findLongestWordLength("May the force be with you"));
  console.log(findLongestWordLength("Google do a barrel roll"));
  console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
  console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));


