function sumFibs(num) {
  
  let fibArr = [1, 1]

  for (let i = 1; fibArr[i] <= num; i++) {
    let newFib = fibArr[i] + fibArr[i-1]
    fibArr.push(newFib)
  }
  fibArr.pop()
   
  
  return fibArr.filter(item => item % 2 !== 0).reduce((a, b) => a + b);
}

console.log(sumFibs(75025)); 