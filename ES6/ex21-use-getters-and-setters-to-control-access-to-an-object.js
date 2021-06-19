class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}


const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

console.log(new Thermostat(76))
console.log(typeof(Thermostat))

/* 
Getters and setters are functions to acess and modify, respectively, the value of an object's private variable.
Note: It is convention to precede the name of a private variable with an underscore (_). However, the practice itself does not make a variable private.
*/