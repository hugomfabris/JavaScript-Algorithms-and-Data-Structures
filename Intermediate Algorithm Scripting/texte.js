function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }
  for (let i = 2; i < tmp.length; i++) {
    if (isPrime(tmp[i])) {
      primesInRange.push(tmp[i])
    }
  }

  let result = []
  for (let j = 0; j < primesInRange.length; j++) {
    while (rangeArr.some(item => (item % primesInRange[j]) == 0)) {
      result.push(primesInRange)
      rangeArr.map(function(item) {
        if (item % primesInRange[j] == ) {
          item/primesInRange[j]
        }
      }) 
    }
  }