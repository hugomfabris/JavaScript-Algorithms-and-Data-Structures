/*
For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.
*/

let quoteSample = "3 blind ^ mice.";
let myRegex = /[^aeiou0-9]/gi; 
let result = quoteSample.match(myRegex) 

console.log(result)