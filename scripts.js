function capitalize(string) {
  let firstLetter = string.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  let secondPart = string.slice(1,);
  return firstLetter + secondPart;
}

module.exports = capitalize;