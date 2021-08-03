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
  
    let result = {
      status: '',
      change: []
    }
  
    let change = cash - price
  
    for (let i = cid.length - 1; i >= 0; i--) {
      if (change >= currencyObj[cid[i][0]]) {
         if (change >= cid[i][1] && cid[i][1] >= currencyObj[cid[i][0]]) {
           change -= currencyObj[cid[i][0]]
           cid[i][1] -= currencyObj[cid[i][0]]
        }
        else {
          result.status = "INSUFFICIENT_FUNDS"
        }
        //change -= currencyObj[cid[i][0]]
        //cid - 
      }
  
    }
  
    if (cid.every(item => item[1] === 0)) {
      result.status = "CLOSED"
    }
    
    return cid;
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))