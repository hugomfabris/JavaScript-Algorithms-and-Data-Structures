function whatIsInAName(collection, source) {
  // Only change code below this line
  let sourceKeys = Object.keys(source)

      return collection.filter(function(obj) {
    for (var i = 0; i < sourceKeys.length; i++) {
      if (
        !obj.hasOwnProperty(sourceKeys[i]) ||
        obj[sourceKeys[i]] !== source[sourceKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
} 
  // Only change code above this line

    

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
