let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin).* Roosevelt/; 
let result = myRegex.test(myString); 

// After passing the challenge experiment with myString and see how the grouping works

console.log(result)