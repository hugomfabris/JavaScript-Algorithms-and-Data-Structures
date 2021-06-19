const createPerson = (name, age, gender) => ({name, age, gender})

const person1 = createPerson("Zodiac Hasbro", 56, "male")

console.log(person1)

//As we can see below, the property shorthand is nothing but an object creator that manifests itself in concise object literal declaration
console.log(typeof(createPerson))