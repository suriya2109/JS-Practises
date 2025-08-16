// function findMissingNumber(arr) {

//     let n = arr.length + 1;
//     let totalSum = (n * (n + 1)) / 2;

//     const arrSum = arr.reduce((arr, num) => arr + num, 0);

//     const totalVal = totalSum - arrSum;

//     return totalVal;

//     // let total = arr.length + 1;
//     // let num = new Set(arr);
//     // for (let i = 1; i <= total; i++) {
//     //     if (!num.has(i)) return i;
//     // }

// }
var findDisappearedNumbers = function(nums) {
    let nums1 = new Set(nums);
    let result = [];
    for (let i = 1; i < nums.length + 1; i++) {
        if (!nums1.has(i)) {
            result.push(i);
        }
    }
    return result;
};
let nums = [4, 3, 2, 7, 8, 2, 3, 1]
console.log(findDisappearedNumbers(nums));

// console.log(findMissingNumber([10, 2, 3, 4, 1, 5, 9, 6, 8]));


// Describe the purpose of the reduce method in arrays?
// The reduce() method in JavaScript is used to reduce an array to a single value by applying a function on each element in the array.