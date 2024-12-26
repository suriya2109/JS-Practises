function findRepeatingWords(str) {
    frequentMap = {};

    // builde frequency map
    for (const char of str) {
        if (frequentMap[char]) {
            frequentMap[char] += 1;
        } else {
            frequentMap[char] = 1;
        }
    }

    for (const char of str) {
        if (frequentMap[char] !== 1) {
            return char;
        }
    }
    return null;
}

console.log(findRepeatingWords("amini"));