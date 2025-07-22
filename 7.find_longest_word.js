function findLongestWord(sentence) {
    // split the longest word in the sentence
    const words = sentence.split(' ');
    // track the words
    longestwords = "";
    for (const word of words) {
        if (word.length > longestwords.length) {
            longestwords = word;
        }
    }
    return longestwords;
}

const sentence = "The suriya is a businessman";
console.log(findLongestWord(sentence));