const squareList = arr => {

  return arr.filter(item => Number.isInteger(item) && item >= 0).map(item => item*item)

};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);