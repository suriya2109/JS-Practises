function detectCapitalUse(word) {

    if (word === word.toUpperCase()) return true;
    if (word === word.toLowerCase()) return true;

    if (word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase()) {
        return true;
    }
    return false;
}

let word = "USA";
// let word2 = "UsA";
// let word3 = "TamilNadu";
console.log(detectCapitalUse(word))