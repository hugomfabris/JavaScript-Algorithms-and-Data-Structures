function sliceArray(anim, beginSlice, endSlice) {

  let newArr = anim.slice(beginSlice, endSlice)

  return newArr

}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

console.log(sliceArray(inputAnim, 1, 3));
