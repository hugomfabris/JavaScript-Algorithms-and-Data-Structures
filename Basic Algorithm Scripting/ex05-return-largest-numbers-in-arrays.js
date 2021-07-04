function largestOfFour(arr) {
  let arrMax = []
  //Two loops are needed here to access the elements in the nested array
  for (let i = 0; i < arr.length; i++) {
    //Here we assing the maximum value for the first element in the nested array every iteration
    let max = arr[i][0]
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j] 
      }
    }
    //Then, outside the second loop, we use the method push to put the value found on the answer array
    arrMax.push(max)
  } 
  return arrMax;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
 
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))