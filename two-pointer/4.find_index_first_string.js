// Approach (Two-Pointer way)

// We have two pointers:

// i → goes over the haystack

// j → goes over the needle

// If characters match → move both.
// If mismatch → reset j and shift i back to the next possible start.
var strStr = function(haystack, needle) {
    if (needle === "") return 0; // edge case

    let h = haystack.length;
    let n = needle.length;

    let i = 0,
        j = 0;

    while (i < h) {
        // console.log(haystack[i], needle[j]);
        if (haystack[i] === needle[j]) {
            i++;
            j++;
            // console.log(i - j);
            if (j === n) {
                return i - j; // found match
            }
        } else {
            i = i - j + 1; // shift start by 1
            j = 0;
        }
    }
    return -1;
};

// Test
console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("leetcode", "leeto")); // -1
console.log(strStr("mississippi", "issip")); // 4