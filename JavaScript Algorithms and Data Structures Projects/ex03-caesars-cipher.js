function rot13(str) {

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let splitStr = str.split('')
    let result = []
    
    for (let i = 0; i < splitStr.length; i++) {
  
      if (alphabet.indexOf(splitStr[i]) >= 0) {
        if (alphabet.indexOf(splitStr[i]) < 13) {
          result.push(alphabet[alphabet.indexOf(splitStr[i]) + 13])
        }
        else {
          result.push(alphabet[alphabet.indexOf(splitStr[i]) - 13])
        }
        
      }
      else {
        result.push(splitStr[i])
      }
  
    }
  
    return result.join('');
  }
  
  console.log(rot13('SERR PBQR PNZC'));