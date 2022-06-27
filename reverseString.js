function reverseString(str) {
    let arr = str.split("");
    arr = arr.reverse();
    newStr = arr.join("");
    return newStr;
}

module.exports = reverseString;