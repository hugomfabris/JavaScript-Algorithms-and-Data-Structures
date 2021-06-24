function htmlColorNames(arr) {
  /*
  let startIndex = 0;
  let amountToDelete = 2;
  Notice that we can define variables or pass the index directly in the first 2 parameters to reach the same result
  The second parameter is not inclusive, as we can see in the below log.
  */
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')

  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));