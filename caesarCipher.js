function caesarCipher(str) {
    let arr = str.split("");
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let capAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let alphabetArr = alphabet.split("");
    let capAlphabetArr = capAlphabet.split("");
    for (let i = 0; i < arr.length; i++) {
        let num = " ";
        for (let j = 0; j < alphabetArr.length; j++) {
            if(arr[i] === alphabetArr[j]) {
                if (arr[i] === "z") num = "a";
                else num = alphabetArr[j + 1];
            }
            if (arr[i] === capAlphabetArr[j]) {
                if (arr[i] === "Z") num = "A"; 
                else num = capAlphabetArr[j + 1];
            }
        }
        arr[i] = num;
    }
    let newStr = arr.join("");
    return newStr;
}


module.exports = caesarCipher;