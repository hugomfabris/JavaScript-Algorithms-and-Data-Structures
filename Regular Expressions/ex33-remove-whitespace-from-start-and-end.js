let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line

console.log(result)

/* 

The goal here is to extinguish the empty spaces and we have to focuson that. Try to pass the string "Hello, World!" as the replace parameter is a less inteligent solution.

*/