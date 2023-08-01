/* Find the missing letter in the passed letter range and return it. If all letters are present in the range, 
return undefined. */

function fearNotLetter(str) {

    let letter = "";

    for (let i = 0; i < str.length; i++) {

        const currentAscii = str[i].charCodeAt();
        // console.log(str[i] + ": " + currentAscii);
        const nextAscii = str.charCodeAt(i + 1);
        // console.log(str[i + 1] + ": " + nextAscii);

        // Se pasa del final de la cadena   
        /*  if (currentAscii + 1 !== nextAscii && nextAscii !== NaN) {
    
                console.log("falta algooooooooo en: " + i);
                console.log(str);
                console.log(String.fromCharCode(nextAscii - 1));
                letters.push(String.fromCharCode(nextAscii - 1));
    
            }*/
        if (nextAscii - currentAscii > 1) {

            // console.log("falta algooooooooo en: " + i);
            // console.log(str);
            // console.log(String.fromCharCode(nextAscii - 1));
            letter = String.fromCharCode(nextAscii - 1);
            return letter;

        }
    }

    return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("abcstvwxe"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));



