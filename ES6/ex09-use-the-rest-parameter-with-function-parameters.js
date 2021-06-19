const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1,2,3,4))
/*
Altought the Spread operator and the Rest operator are written the same way, they have oposite functions (spread is used to expand and rest to condensate). When used inside functions, we have the Rest operator. 
*/