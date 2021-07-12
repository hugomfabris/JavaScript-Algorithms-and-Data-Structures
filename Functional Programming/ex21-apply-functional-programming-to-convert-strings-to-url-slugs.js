// Only change code below this line
function urlSlug(title) {

let arr = title.split(' ').map(item => item.toLowerCase()).filter(item => item !== '').join('-')

return arr
}
// Only change code above this line


console.log(urlSlug(" Winter Is  Coming"))