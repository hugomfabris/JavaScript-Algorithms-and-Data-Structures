function telephoneCheck(str) {

  if (str[0] == 1) {
    let countryCodeRegex = /^1\s?(\d{3}-?\s?\d{3}-?\s?\d{4}$)|^1\s?[(]\d{3}[)]-?\s?\d{3}-?\s?\d{4}$/
    return countryCodeRegex.test(str)
  }
  else {
    let standardRegex = /(^[(]\d{3}[)]-?\s?\d{3}-?\s?\d{4}$)|^\d{3}-?\s?\d{3}-?\s?\d{4}$/g
  
  return standardRegex.test(str);

  }
  
  
}

console.log(telephoneCheck("5555555555"));



// |(^[(]?\d{3}[)]?-?\s?\d{3}-?\s?\d{4}$)


