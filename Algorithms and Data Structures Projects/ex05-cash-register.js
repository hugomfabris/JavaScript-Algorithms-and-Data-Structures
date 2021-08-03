function checkCashRegister(price, cash, cid) {
  
  let currencyObj = {
    'ONE HUNDRED' :	100,
    TWENTY: 	20,
    TEN: 	10,
    FIVE: 	5,
    ONE:	1,
    QUARTER:	0.25,
    DIME:	0.1,
    NICKEL:	0.05,
    PENNY:	0.01,
  }
    
  
  let currencyValues = Object.values(currencyObj)
  let totalCid = 0
  let changeArr = []
  let result = {
    status: '',
    change: []
  }

  for (let i = 0; i < cid.reverse().length; i++) {
    totalCid += cid[i][1]
  }

  let changeToGive = cash - price

  if (changeToGive > totalCid) {
    result.status = "INSUFFICIENT_FUNDS"
  }
  else if (changeToGive == totalCid) {
    result.status = "CLOSED"
    result.change = cid
  }
  else {
    let reverseCid = cid.reverse()
    for (let i = 0; i < reverseCid.length; i++) {
      let tmp = [reverseCid[i][0], 0];
      while (changeToGive >= currencyValues[i] && reverseCid[i][1] > 0) {
        changeToGive -= currencyValues[i]
        totalCid -= currencyValues[i]
        totalCid = totalCid.toFixed(2)
        reverseCid[i][1] -= currencyValues[i]
        tmp[1] += currencyValues[i]
        changeToGive = changeToGive.toFixed(2)
        reverseCid[i][1] = reverseCid[i][1].toFixed(2)
      } 
      if (tmp[1] > 0) {
        changeArr.push(tmp) 
        result.change = changeArr
      }
    }
    if (changeToGive > 0) {
        result.status = "INSUFFICIENT_FUNDS"
        result.change = []
    }
    else { 
      result.status = "OPEN"
    }
  }
  return result  
} 

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));