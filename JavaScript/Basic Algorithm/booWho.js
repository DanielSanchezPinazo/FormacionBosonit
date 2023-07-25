/* Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false. */

function booWho(bool) {

    if (bool === true || bool === false) {

        bool = true;
        
    } else {

        bool = false;
    }

    return bool;
  }
  
  booWho(null);
  console.log(booWho(null));
  console.log(booWho(true));
  console.log(booWho([1, 2, 3]));
  console.log(booWho([].slice));
  console.log(booWho({ "a": 1 }));
  console.log(booWho(1));
  console.log(booWho("a"));
  console.log(booWho("false"));
  console.log(booWho(false));
  console.log(booWho("true"));
  