function myReplace(str, before, after) {
  let lowcaseRegex = /^[a-z]/
  let arr = str.split(' ')
  let beforeIndex = arr.indexOf(before)
    
  if (lowcaseRegex.test(before) && lowcaseRegex.test(after)) {
    let spliced = arr.splice(beforeIndex, 1, after)
    let finalStr = arr.join(' ')
    return finalStr
  }
  else if (!lowcaseRegex.test(before) && !lowcaseRegex.test(after)) {
    let spliced = arr.splice(beforeIndex, 1, after)
    let finalStr = arr.join(' ')
    return finalStr
  }
  else if (lowcaseRegex.test(before) && !lowcaseRegex.test(after)) {
    let spliced = arr.splice(beforeIndex, 1, after.toLowerCase())
    let finalStr = arr.join(' ')
    return finalStr
  }
  else if (!lowcaseRegex.test(before) && lowcaseRegex.test(after)) {
    let aftersplit = after.split('')
    aftersplit.splice(0, 1, aftersplit[0].toUpperCase())
    aftersplit.join[' ']
    let spliced = arr.splice(beforeIndex, 1, aftersplit.join(''))
    let finalStr = arr.join(' ')
    return finalStr
  }
  
}

//when revising this code remember to also revise the solutions that use the methods charAT(), substring()

console.log(myReplace("His name is Tom", "Tom", "john")); 