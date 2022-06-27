function capitalize(str) {
  let firstLetter = str.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  let secondPart = str.slice(1,);
  return firstLetter + secondPart;
}

module.exports = capitalize;