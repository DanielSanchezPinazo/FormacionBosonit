/* Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)

Run the tests to see the expected output for each method. These methods must be the only available means of interacting with the object.
Each test will declare a new Person instance as new Person('Bob', 'Ross'). */

const Person = function(first, last) {
    let firstName = first;
    let lastName = last;
  
    this.getFullName = function() {
      return firstName + " " + lastName;
    };
  
    this.getFirstName = function() {
      return firstName;
    };
  
    this.getLastName = function() {
      return lastName;
    };
  
    this.setFullName = function(newFirst, newLast) {
      if (typeof newFirst === 'string' && typeof newLast === 'string') {
        firstName = newFirst;
        lastName = newLast;
      }
    };
  
    this.setFirstName = function(newFirst) {
      if (typeof newFirst === 'string') {
        firstName = newFirst;
      }
    };
  
    this.setLastName = function(newLast) {
      if (typeof newLast === 'string') {
        lastName = newLast;
      }
    };
  };


console.log(new Person('Bob', 'Ross'));
