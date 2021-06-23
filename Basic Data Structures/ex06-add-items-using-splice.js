function htmlColorNames(arr) {
  // Only change code below this line

  //let startIndex = 0;
  //let amountToDelete = 2;
  //Notice that we can define variables or pass the index directly in the first 2 parameters to reach the same result
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')

  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));