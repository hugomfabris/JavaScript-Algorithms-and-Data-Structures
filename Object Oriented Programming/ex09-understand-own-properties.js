function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

canary.color = 'green'
console.log(canary)
console.log(ownProps)

// Here color is not a own property because we define it later, outside the constructor

