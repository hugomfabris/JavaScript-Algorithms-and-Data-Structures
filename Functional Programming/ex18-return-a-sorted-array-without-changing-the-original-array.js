var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {

  let newArr = [...arr]
  newArr.sort(function(a, b) {
    return a - b
  })

  return newArr
}

console.log(nonMutatingSort(globalArray));