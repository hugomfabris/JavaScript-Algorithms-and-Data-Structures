function chunkArrayInGroups(arr, size) {
  let newArr = []
  for (let i = 0; i < arr.length; i += size) {
    
    let slicedArr = arr.slice(i, i + size)
    newArr.push(slicedArr)
      
    }

  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));



// [a, b, c, d, e, f, g, h, i, j, k, l, m]
