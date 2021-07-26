function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  let newArr = []

  arr.map(function(item) {
    item.orbitalPeriod = Math.round(2*Math.PI*Math.sqrt((Math.pow(earthRadius + item.avgAlt, 3))/GM))
    delete item.avgAlt
  })

  return arr ;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

// T = 2pi sqrt(a³/GM)
// On the revision remember to better adjust the code with functional programming concepts