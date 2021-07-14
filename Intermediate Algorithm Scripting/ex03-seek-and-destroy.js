function destroyer(arr) {

  let removeItems = Object.values(arguments).slice(1)
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < removeItems.length; j++) {
      if (arr[i] === removeItems[j]) {
        delete arr[i]
      }
    }
  }

  return arr.filter(item => item !== null);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

