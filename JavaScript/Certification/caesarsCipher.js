/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the 
letters are shifted by some set amount. A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus A <-> N, B <-> O and so on. Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */

function rot13(str) {

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let decode = [];

    str = str.split("");
    // console.log(str);

    str.forEach( letter => {

        if (/[A-Z]/.test(letter)) {

            // console.log("es letra");
            let index = alphabet.indexOf(letter);

            if (index >= 13) {

                // console.log(letter + " " + index);
                // console.log(alphabet[index - 13]);
                decode.push(alphabet[index - 13]);
                
            } else {

                index = 13 - index;
                // console.log(index);
                decode.push(alphabet[alphabet.length - index]);

            }
            
        } else {

            // console.log("no es letra");
            decode.push(letter);
        }
        
    });

    str = str.join("")
    decode = decode.join("");
    // console.log(str);

    return decode;
  }
  
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));

