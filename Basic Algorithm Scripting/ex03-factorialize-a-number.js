function factorialize(num) {
  if (num == 0) {
    return 1
  }
  else {
    //Here we use a classic recursive solution
    var product = num*(factorialize(num - 1)) 
  }
  return product
  
}



console.log(factorialize(5));