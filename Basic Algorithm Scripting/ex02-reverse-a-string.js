function reverseString(str) {
  let reverseStr = ''
  for (let n = str.length - 1; n >= 0  ; n--) {
    reverseStr += str[n]
  }

  return reverseStr;
}

console.log(reverseString("hello"));