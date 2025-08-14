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
    let maxCount = 0;
    let count = 0;

    for (let num of arr) {
        if (num === 1) {
            count++;
            maxCount = Math.max(maxCount, count);
        } else {
            count = 0; // Reset count for other numbers
        }
    }
    return maxCount;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3, 3]))