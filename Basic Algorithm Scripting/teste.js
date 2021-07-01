function bouncer(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === false) {
        arr.splice(i, 1)
      }
      else if (arr[i] === null) {
        arr.splice(i, 1)
      }
      else if (arr[i] === 0) {
        arr.splice(i, 1)
      }
      else if (arr[i] === "") {
        arr.splice(i, 1)
      }
      else if (arr[i] === undefined) {
        arr.splice(i, 1)
      }
      else if (arr[i] === NaN) {
        arr.splice(i, 1)
      }
      
    } 
  
    return arr;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));