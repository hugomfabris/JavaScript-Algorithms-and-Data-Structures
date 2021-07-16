function spinalCase(str) {
  
  let firtRegex = /[\W||_]/g
  let secondRegex = /([a-z])([A-Z])/g
  let newStr = str.replace(firtRegex, '-').replace(secondRegex, '$1-$2').toLowerCase()
  

   

  return newStr

}

console.log(spinalCase('thisIsSpinalTap'));