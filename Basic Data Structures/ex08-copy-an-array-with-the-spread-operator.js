function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    
    let obj = [...arr]
    newArr.push(obj)

    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));