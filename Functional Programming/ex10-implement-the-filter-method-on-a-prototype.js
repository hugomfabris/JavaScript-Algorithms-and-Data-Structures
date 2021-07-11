// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {

  var newArray = [];

//We see below that filter uses a statement and itarates it all over the items of a function to check if they literally pass a filter

for (let i = 0; i < this.length; i++) {
  if (callback(this[i])) {
    newArray.push(this[i])
  }
}

  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s)