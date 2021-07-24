var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {

  let newArr = [...arr]
  newArr.sort(function(a, b) {
    return a - b
  })
//For positive values, the callback function will change the order of the arguments
  return newArr
}

console.log(nonMutatingSort(globalArray));