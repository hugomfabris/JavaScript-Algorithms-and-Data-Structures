function quickCheck(arr, elem) {
  if (arr.indexOf(elem) != -1) {
    return true
  }
  else {
    return false
  }
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