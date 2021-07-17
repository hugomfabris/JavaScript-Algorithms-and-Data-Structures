function pairElement(str) {
  
  let maptStr = str.split('').map((item) => {
    if (item == "A") {
      return ["A", "T"]
    }
    else if (item == "T") {
      return ["T", "A"]
    }
    else if (item == "C") {
      return ["C", "G"]
    }
    else if (item == "G") {
      return ["G", "C"]
    }
  })
 
  
  
  return maptStr;
}

console.log(pairElement("GCG"));