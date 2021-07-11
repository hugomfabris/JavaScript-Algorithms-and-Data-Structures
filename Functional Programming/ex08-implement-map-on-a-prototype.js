// The global variable
var s = [23, 65, 98, 5];

//Here is important to understand that the invoke of  this function should be exactly like this to work. The array must be a constructor and prototype makes myMap a function
Array.prototype.myMap = function(callback) {
  var newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]))
  }

  return newArray;
};

var new_s = s.myMap(function(x) {
  return x * 2;
}); 

console.log(new_s)