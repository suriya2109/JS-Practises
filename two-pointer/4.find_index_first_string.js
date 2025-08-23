// function findIndexOfFristString(haystack, needle) {

//     // return haystack.indexOf(needle);
//     if (needle === "") return 0;

//     console.log(haystack.length - needle.length);

//     for (let i = 0; i <= haystack.length - needle.length; i++) {
//         let j = 0;
//         for (; j < needle.length; j++) {
//             console.log(haystack[i]);
//             if (haystack[i + j] !== needle[j]) {
//                 break;
//             }
//         }
//         if (j === needle.length) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(findIndexOfFristString("sadbutsad", "sad")); // Output: 0
// let haystack = "sadbutsad";
// let needle = "sad";


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