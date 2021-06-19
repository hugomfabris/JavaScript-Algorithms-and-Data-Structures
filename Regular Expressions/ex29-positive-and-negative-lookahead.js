let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);


/* 

A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

*/

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
let result2 = checkPass.test(password);

console.log(result)
console.log(result2)