// function findRepeatingWords(str) {
//     frequentMap = {};

//     // builde frequency map
//     for (const char of str) {
//         if (frequentMap[char]) {
//             frequentMap[char] += 1;
//         } else {
//             frequentMap[char] = 1;
//         }
//     }

//     for (const char of str) {
//         if (frequentMap[char] !== 1) {
//             return char;
//         }
//     }
//     return null;
// }

// console.log(findRepeatingWords("amini"));



// false ('l' repeats)
// isUnique("World")    // true
// isUnique("JavaScript") // false ('a' repeats)
// isUnique("Python")

function isUnique(str) {
    let strs = str.toLowerCase();
    const track = {}
    for (const char of strs) {
        if (track[char]) {
            return false;
        }
        track[char] = true;
    }
    return true;
}

console.log(isUnique("Hello"));