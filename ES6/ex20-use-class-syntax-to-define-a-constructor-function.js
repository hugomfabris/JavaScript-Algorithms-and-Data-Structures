// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name);
console.log(typeof(carrot))
console.log(typeof(Vegetable)) //Important to see that Vegetable is a function and not a class

/*
It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.
*/
/*
The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.
*/
