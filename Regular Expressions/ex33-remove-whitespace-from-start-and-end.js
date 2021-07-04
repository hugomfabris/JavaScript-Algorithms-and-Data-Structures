let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex, ""); 

console.log(result)

/* 

The goal here is to extinguish the empty spaces and we have to focus on that. Try to pass the string "Hello, World!" as the replace parameter is a less inteligent solution.

*/