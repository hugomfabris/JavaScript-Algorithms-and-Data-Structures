function add(x) {

  return function(y) {
    return function(z) {
      return x + y + z
    }
  }
}

console.log(add(10)(20)(30));

// The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.