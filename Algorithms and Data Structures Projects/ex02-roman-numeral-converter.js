function convertToRoman(num) {
  let obj = {
    1: 'I',
    2: 'II',
    3: 'III', 
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M',
    2000: 'MM',
    3000: 'MMM',
    
  }

  function splitNum(n) {
    let splitedArr = []
    let tmp = n.toString().split('')
    if (tmp.length == 4) {
      let m = parseInt(tmp[0] + '000')
      let c = parseInt(tmp[1] + '00')
      let d = parseInt(tmp[2] + '0')
      let u = parseInt(tmp[3])
      splitedArr.push(m, c, d, u)
      for (let i = 0; i < splitedArr.length; i++) {
        splitedArr[i] = obj[splitedArr[i]]
      }
     return splitedArr.join('')
   }
    else if (tmp.length == 3) {
      let c = parseInt(tmp[0] + '00')
      let d = parseInt(tmp[1] + '0')
      let u = parseInt(tmp[2])
      splitedArr.push(c, d, u)
      for (let i = 0; i < splitedArr.length; i++) {
        splitedArr[i] = obj[splitedArr[i]]
      }
      return splitedArr.join('')
   }
    else if (tmp.length == 2) {
      let d = parseInt(tmp[0] + '0')
      let u = parseInt(tmp[1])
      splitedArr.push(d, u)
      for (let i = 0; i < splitedArr.length; i++) {
        splitedArr[i] = obj[splitedArr[i]]
      }
      return splitedArr.join('')
   }
    else if (tmp.length == 1) {
      let u = parseInt(tmp[0])
      splitedArr.push(u)
      splitedArr = obj[splitedArr]

      return splitedArr
   }
    


  }



  return  splitNum(num)
}

console.log(convertToRoman(44));


