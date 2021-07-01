function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());

  return str
}


console.log(titleCase("I'm a little tea pot"))