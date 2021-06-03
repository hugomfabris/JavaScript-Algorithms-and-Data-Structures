function checkObj(obj, checkProp) {

  var finder = obj.hasOwnProperty(checkProp)
  if (finder == true) {
    return obj[checkProp]
  }
  else {
    return "Not Found"
  }
}

console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house"))