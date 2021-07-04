/*
The method slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index, different from splice that takes as parameters the index and the number of extractions when passed 2 parameters). 
*/

function forecast(arr) {

  return arr.slice(2, 4);

}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));