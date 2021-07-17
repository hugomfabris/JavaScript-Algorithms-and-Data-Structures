function sentensify(str) {


  let arr = str.split(/\W/)

  return arr.join(' ')

}

console.log(sentensify("May-the-force-be-with-you")); 