/* Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
     M	           1000
     CM	            900
     D	            500
     CD	            400
     C	            100
     XC	             90
     L	             50
     XL	             40
     X	             10
     IX	              9
     V	              5
     IV	              4
     I	              1

All roman numerals answers should be provided in upper-case. */

function convertToRoman(num) {

    const numbers = [
        { roman: 'M', arabic: 1000 },
        { roman: 'CM', arabic: 900 },
        { roman: 'D', arabic: 500 },
        { roman: 'CD', arabic: 400 },
        { roman: 'C', arabic: 100 },
        { roman: 'XC', arabic: 90 },
        { roman: 'L', arabic: 50 },
        { roman: 'XL', arabic: 40 },
        { roman: 'X', arabic: 10 },
        { roman: 'IX', arabic: 9 },
        { roman: 'V', arabic: 5 },
        { roman: 'IV', arabic: 4 },
        { roman: 'I', arabic: 1 }
      ];
    
    let result = '';

    for (const number of numbers) {

        while (num >= number.arabic) {

            result += number.roman;
            // console.log(result);
            num -= number.arabic;
            // console.log(num);
        }
    }

  return result;
}

console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(9));   
console.log(convertToRoman(12));
console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(44));
console.log(convertToRoman(45));   
console.log(convertToRoman(68));
console.log(convertToRoman(83));
console.log(convertToRoman(97));
console.log(convertToRoman(99));
console.log(convertToRoman(400));   
console.log(convertToRoman(500));
console.log(convertToRoman(501));
console.log(convertToRoman(649));
console.log(convertToRoman(798));
console.log(convertToRoman(891));
console.log(convertToRoman(1000));
console.log(convertToRoman(1004));
console.log(convertToRoman(1006));
console.log(convertToRoman(1023));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));
console.log(convertToRoman(36));



