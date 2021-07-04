/*
function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice()
  let arr3 = arr2.splice(0, n)
  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i])
  }
  for (let j = 0; j < arr2.length; j++) {
    arr3.push(arr2[j])
  }
  arr2 = localArr

  return arr3;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
*/

function frankenSplice(arr1, arr2, n) {
  
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}


