function countVowels(str) {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"];

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels('suriya'));