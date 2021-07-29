function palindrome(str) {
  let alphRegex = /[a-zA-Z0-9]/gi
  let checker = str.match(alphRegex).join('').toLowerCase()
  let upSide = []
  for (let i = 0; i < checker.length; i++) {
    upSide.unshift(checker[i])
  }
return (checker == upSide.join(''))
}


console.log(palindrome("1 eye for of 1 eye."));
