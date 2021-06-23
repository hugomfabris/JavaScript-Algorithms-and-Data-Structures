function quickCheck(arr, elem) {
  // Only change code below this line
  
  if (arr.indexOf(elem) != -1) {
    return true
  }
  else {
    return false
  }
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

/* 
There are 2 better ways to solve this challenge:

function quickCheck(arr, elem) {
  return arr.indexOf(elem) != -1;
}

or

function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0 ? true : false;
}
*/