function longestCommonPrefix(strs) {
    if (!strs.length) return ""; // Handle empty input

    let prefix = strs[0]; // Take the first string as the initial prefix

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) { // While prefix is not a prefix of strs[i]
            prefix = prefix.substring(0, prefix.length - 1); // Reduce prefix
            if (prefix === "") return ""; // If prefix becomes empty, return ""
        }
    }
    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["apple", "apricot", "apex"])); // "ap"
console.log(longestCommonPrefix(["hello", "helicopter", "helium"])); // "hel"