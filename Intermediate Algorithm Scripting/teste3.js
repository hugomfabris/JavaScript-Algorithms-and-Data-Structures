function addTogether() {
  
    let args = [...arguments]
    for (let item in arguments) {
      if (typeof(item) === 'number') {
        if (args.keys().length == 1) {
      function callArg(num) {
  
        return num + args[0]
      } 
    }
        else if (args.keys().length > 1) {
          return args.reduce((a,b) => a + b)
    }
        else {
          return undefined
    }
  
      }
    }    
  }
  
  console.log(addTogether(2, 3));