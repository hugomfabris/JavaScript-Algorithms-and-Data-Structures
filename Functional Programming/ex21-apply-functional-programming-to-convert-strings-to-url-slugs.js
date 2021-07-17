function urlSlug(title) {

let arr = title.split(' ').map(item => item.toLowerCase()).filter(item => item !== '').join('-')

return arr
}

console.log(urlSlug(" Winter Is  Coming"))