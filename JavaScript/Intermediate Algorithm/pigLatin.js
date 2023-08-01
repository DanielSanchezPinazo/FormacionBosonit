/* Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, 
and add "ay" to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase. */

function translatePigLatin(str) {

    let arr = str.split("");

    if (arr[0].match(/[^aeiou]/) || arr.every( char => char.match(/[^aeiou]/))) {

        let vowel = arr.join("").search(/[aeiouAEIOU]/);
        // let vowel = arr.findIndex( char => /[aeiouAEIOU]/.test(char));
        // console.log(vowel);
        let change = arr.splice(0, vowel);
        // console.log(change);
        arr = arr.concat(...change, "ay").join("");

    } else {
       
        arr.push("way");
        arr = arr.join("");
    }

    return arr;
  }
  
//   translatePigLatin("consonant");
  console.log(translatePigLatin("consonant"));
  console.log(translatePigLatin("california"));
  console.log(translatePigLatin("paragraphs"));
  console.log(translatePigLatin("glove"));
  console.log(translatePigLatin("algorithm"));
  console.log(translatePigLatin("eight"));
  console.log(translatePigLatin("schwartz"));
  console.log(translatePigLatin("rhythm"));





