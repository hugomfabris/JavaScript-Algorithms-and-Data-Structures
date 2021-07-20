function steamrollArray(arr) {

  let flatArr = []

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flatArr.push(arr[i])
    }
    else {
      flatArr.push(...steamrollArray(arr[i]))
      
    }
  }
  return flatArr
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

console.log(typeof([1,2,3]))