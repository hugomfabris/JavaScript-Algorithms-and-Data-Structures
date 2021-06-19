let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; 


let result = chewieQuote.match(chewieRegex);

console.log(result)

console.log(typeof(result))

/*

Examples: 
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go* /;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

In order, the three match calls would return the values ["goooooooo"], ["g"], and null.

*/
