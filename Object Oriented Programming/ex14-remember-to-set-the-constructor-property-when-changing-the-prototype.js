/*
There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property! This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results.
*/
function Dog(name) {
  this.name = name;
}

Dog.prototype = {

  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

let beagle = new Dog('Brian')

console.log(beagle.constructor === Dog)