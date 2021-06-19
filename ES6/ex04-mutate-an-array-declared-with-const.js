const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  return s

  // Using s = [2, 5, 7] would be invalid
}
console.log(editInPlace(s));