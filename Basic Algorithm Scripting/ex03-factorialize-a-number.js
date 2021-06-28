function factorialize(num) {
  if (num == 0) {
    return 1
  }
  else {
    var product = num*(factorialize(num - 1)) 
  }
  return product
  
}



console.log(factorialize(5));