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
  
    let change = cash - price
    for (let i = cid.length; i >= 0; i--) {
      if (change > cid[i[1]]) {
        while (change > cid[i[1]]) {
          change -= currencyObj[cid[i[0]]]
          cid[i[1]] -= currencyObj[cid[i[0]]]
          }
  
      }
    }
  
  
    let result = {
      status: '',
      change:  [],
    }
  
    
  
    return cid;
  }
  
  console.log(checkCashRegister(20, 200, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));