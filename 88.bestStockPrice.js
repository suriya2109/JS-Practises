// 8️⃣ Best Time to Buy and Sell Stock (LeetCode #121)
// function maxProfit(prices) {
//     let minPrice = Infinity,
//         maxProfit = 0;
//     for (let price of prices) {
//         minPrice = Math.min(minPrice, price);
//         maxProfit = Math.max(maxProfit, price - minPrice);
//     }
//     return maxProfit;
// }

// console.log(maxProfit([7, 6, 4, 3, 1]));

// var searchInsert = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] >= target) {
//             return i;
//         }
//     }
//     return nums.length;
// };

// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 2));
// console.log(searchInsert([1, 3, 5, 6], 7));
// console.log(searchInsert([1, 3, 5, 6], 0));

// var getSneakyNumbers = function(nums) {
//     let duplicateArr = [];
//     let originalArr = [];
//     let seen = {};
//     for (let i = 1; i < nums.length; i++) {
//         const value = nums[i]
//         if (!seen[value]) {
//             seen[value] = true;
//             originalArr.push(value);
//         } else {
//             duplicateArr.push(value);
//         }
//     }
//     return duplicateArr;
// };

// console.log(getSneakyNumbers([0, 3, 2, 1, 3, 2]));

// var plusOne = function(digits) {
//     let result = Number(digits.join('')) + 1;
//     return result.toString().split('').map(Number);
// };

// console.log(plusOne([1, 2, 3, 4, 5]));
var singleNumber = function(nums) {
    result = 0;
    for (let num of nums) {
        result ^= num;
    }
    return result;
};

nums = [2, 2, 1, 3, 3, 3, 3, 3, 2, 2];
console.log(singleNumber(nums));