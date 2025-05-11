/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// var filter = function(arr, fn) {
//     let returnedArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Boolean(fn(arr[i], i))) {
//             returnedArray.push(arr[i]);
//         }
//     }
//     return returnedArray;
// };

// console.log(filter([0, 10, 20, 30], (n) => n > 10));
// console.log(filter([1, 2, 3], (n, i) => i === 0));
// const result = filter([-2, -1, 0, 1, 2], (n) => n + 1);
// console.log(result)

// function maxProfit(prices) {
//     let minProfit = Infinity;
//     let maxProfit = 0;

//     for (let price of prices) {
//         minProfit = Math.min(minProfit, price);
//         maxProfit = Math.max(maxProfit, price - minProfit);
//     }
//     return minProfit;
// }


// console.log(maxProfit([56, 23, 567, 34, 89]));

function longestConsecutive(nums) {
    let set = new Set(nums);
    let longest = 0;

    for (const num of nums) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let streak = 1;
            while (set.has(currentNum + 1)) {
                currentNum++;
                streak++;
            }
            longest = Math.max(longest, streak);
        }
    }
    return longest;
}

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))