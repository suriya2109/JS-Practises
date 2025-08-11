// var intersect = function(nums1, nums2) {
//     let map = new Map();
//     result = [];

//     for (let num of nums1) {
//         map.set(num, (map.get(num) || 0) + 1);
//     }

//     for (let num of nums2) {
//         if (map.get(num) > 0) {
//             result.push(num);
//             map.set(num, (map.get(num) - 1));
//         }
//     }

//     return result;
// }
// let nums1 = [1, 2, 2, 1]
// let nums2 = [2, 2]
// intersect(nums1, nums2);

var uniqueOccurrences = function(arr) {
    let countMap = {};
    for (let num of arr) {
        countMap[num] = (countMap[num] || 0) + 1;
    }
    let counts = Object.values(countMap);
    let uniqueCounts = new Set(counts);
    console.log(counts.length, uniqueCounts.size);
    return counts.length === uniqueCounts.size;
};

let arr = [1, 2, 2, 1, 1, 3, 3]

console.log(uniqueOccurrences(arr))