function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

const myHouse = new House(5)

console.log(myHouse instanceof House)

// Only change code below this line