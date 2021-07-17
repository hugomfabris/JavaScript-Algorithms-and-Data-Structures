function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let firstletter = alphabet.indexOf(str[0])
  let cutAlph = alphabet.substring(firstletter, firstletter + str.length)
  if (str !== cutAlph) {
    let splitedStr = str.split('')
    let splitedAlph = cutAlph.split('')
    let result = ''
    result += splitedAlph.filter(item => splitedStr.indexOf(item) == -1)
    

    return result
  }
}

console.log(fearNotLetter("bcdf"));





