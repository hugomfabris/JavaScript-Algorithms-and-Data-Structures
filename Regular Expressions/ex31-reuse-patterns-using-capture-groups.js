let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);

let result2 = repeatNum.match(reRegex)

console.log(result)
console.log(result2)