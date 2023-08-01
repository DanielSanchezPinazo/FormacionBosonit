/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding 
HTML entities. */

function convertHTML(str) {

    str = str.replace(/&|<|>|"|'/g, sign => {

        switch (sign) {
            case "&":

                return "&amp;";

            case "<":

                return "&lt;";

            case ">":

                return "&gt;";

            case '"':

                return "&quot;";

            case "'":

                return "&apos;";
        }
    });

    return str;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));




