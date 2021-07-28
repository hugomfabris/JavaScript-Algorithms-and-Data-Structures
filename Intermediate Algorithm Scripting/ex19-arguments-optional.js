function addTogether() {

  let args = [...arguments]
  
  return args.some(item => typeof item !== "number")
    ? undefined
    : args.length > 1
    ? args.reduce((a, b) => a + b)
    : item => (typeof item === "number" ? item + args[0] : undefined);
}


console.log(addTogether(2)(5));