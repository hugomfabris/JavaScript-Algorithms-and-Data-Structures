function findLongestWordLength(str) {
  let arr = str.split(' ')
  let bigger = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > bigger) {
      bigger = arr[i].length
      
    }
  }
  return bigger
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

