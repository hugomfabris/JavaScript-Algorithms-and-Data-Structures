let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);


/* 
A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

*/

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
let result2 = checkPass.test(password);

console.log(result)
console.log(result2)