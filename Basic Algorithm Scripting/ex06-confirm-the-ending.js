function confirmEnding(str, target) {
  
  let myRegex = new RegExp(target+'$', 'i')
  
  return myRegex.test(str);
}



console.log(confirmEnding("Bastian", "n"));