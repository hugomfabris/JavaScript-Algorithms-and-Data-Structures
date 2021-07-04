// You can specify the possible existence of an element with a question mark, ?.
let favWord = "favorite";
let favRegex = /favou?rite/; 
let result = favRegex.test(favWord);


console.log(result)