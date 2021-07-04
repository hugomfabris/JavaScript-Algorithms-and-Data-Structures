function copyMachine(arr, num) {
  let newArr = [];
  // Here we use a while operator in order to make the code a little less verbose than it wold be using a for loop
  while (num >= 1) {
    //Important to note that here we use a spread operator to make a new array with the content of our initial array inside. If we don´t use the spread operator, we would have a one dimension deeper array and the wrong solution in this context
    let obj = [...arr]
    newArr.push(obj)

    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));