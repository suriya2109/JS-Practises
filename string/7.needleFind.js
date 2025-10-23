var strStr = function(haystack, needle) {
    let h = haystack.length;
    let n = needle.length;

    let i = 0;
    j = 0;

    while (i < h) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
            if (j === n) {
                return i - j;
            }
        } else {
            i = i - j + 1;
            j = 0;
        }
    }
    return -1;
};

const haystack = "butsad",
    needle = "sad"
console.log(strStr(haystack, needle));