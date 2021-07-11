function nonMutatingSplice(cities) {

  return cities.slice(0, 3);
// Using slice here instead of splice is usefull to avoid mutations and its side effects
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

console.log(nonMutatingSplice(inputCities));