function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line

  let newArr = anim.slice(beginSlice, endSlice)

  return newArr

  // Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

console.log(sliceArray(inputAnim, 1, 3));