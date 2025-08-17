// function findFactorialNum(num) {

//     if (num === 0) {
//         return 1;
//     }
//     let factorialNum = 1;
//     for (let i = 1; i <= num; i++) {
//         factorialNum *= i;
//     }
//     return factorialNum;
//     // if (num > 2) {
//     //     return num;
//     // }
//     // return findFactorialNum(num - 1) + findFactorialNum(num - 2);
// }

// // console.log(findFactorialNum(5));

// function fibonacci(num) {
//     if (num == 1) {
//         return 0;
//     }
//     if (num == 2) {
//         return 1;
//     }
//     return fibonacci(num - 1) + fibonacci(num - 2);
// }

// console.log(fibonacci(8));

var maximumProduct = function(nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;

    let options1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    let options2 = nums[0] * nums[1] * nums[n - 1];
    return Math.max(options1, options2);
};
let nums = [1, 2, 3];
console.log(maximumProduct(nums));