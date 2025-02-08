function charOccurence(str) {
    const counts = {};
    for (let char of str) {
        if (counts[char]) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
    }
    return counts;
}

// const charInput = "Welcome to our home";
// const charOutputs = charOccurence("Welcome to our home");
console.log(charOccurence("Welcome to our home"));