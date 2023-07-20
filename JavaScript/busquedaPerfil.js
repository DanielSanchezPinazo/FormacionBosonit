// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line

    /*   let result = "";
       contacts.forEach( personaje => {
   console.log(personaje["firstName"]);
           if(name == personaje["firstName"]) {
   console.log(name == personaje["firstName"]);
   console.log(personaje.hasOwnProperty(prop));
               if(personaje.hasOwnProperty(prop)) {
   console.log(personaje[prop]);
                   result = personaje[prop];
   console.log(result);
                   return result;
               } else {
                   return "No such property";
               }
           } else {
               return "No such contact";
           }
       })*/

    let result = "No such contact";

    for (let i = 0; i < contacts.length; i++) {

        if (name == contacts[i]["firstName"]) {

            if (contacts[i].hasOwnProperty(prop)) {
                result = contacts[i][prop];
            } else {
                result = "No such property";
            }
        }
    }
    console.log(result);
    return result;

}

lookUpProfile("Sherlock", "likes");
