function rangeOfNumbers(startNum, endNum) {
  if (startNum - endNum === 0) {
    return [startNum]

  }
  else {
    var arr = rangeOfNumbers(startNum, endNum - 1)
    arr.push(endNum)
    return arr
    
  }

  
}

console.log(rangeOfNumbers(1, 5))