/* Return an English translated sentence of the passed binary string.
The binary string will be space separated. */

function binaryAgent(str) {

    let binaryString = str.replace(/\s/g, ''); // remove the blank spaces
    let i = 0; // start index of the string
    let l = binaryString.length;
    let chr; // used to store the decimal representation of the 8 binary digits wich will be extracted from the input binary string
    let out = ''; // output string that will store the decoded result

    for (; i < l; i += 8) { // loop that iterates over the binary string in groups of 8 digits

      chr = parseInt(binaryString.substr(i, 8), 2); // extract the next 8 binary digits using the substr(i, 8) method and convert them to 
                                                    // a decimal number using parseInt(..., 2). The second argument 2 in parseInt specifies 
                                                    // that we are working with binary numbers
      out += String.fromCharCode(chr); // convert the decimal number into its corresponding ASCII character

    }

    return out;
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));

