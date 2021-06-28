function truncateString(str, num) {
  let numStr = ''
  if (str.length <= num) {
    return str
  }
  else {
    for (let i = 0; i < num; i++) {
      numStr += str[i]
    }
    return numStr + '...'; 
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

