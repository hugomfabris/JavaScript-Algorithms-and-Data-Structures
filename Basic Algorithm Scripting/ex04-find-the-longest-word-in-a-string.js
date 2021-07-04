function findLongestWordLength(str) {
  //Split method here turns a sting into an array
  let arr = str.split(' ')
  let bigger = 0
  //We itarate throuh the array to find analize word by word and find the bigger word
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > bigger) {
      bigger = arr[i].length
      
    }
  }
  return bigger
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

