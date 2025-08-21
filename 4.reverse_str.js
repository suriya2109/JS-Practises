// function reverseFunc(str) {
//     reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
//     // let reverseString = str.split('').reverse().join('');
//     // return reverseString;
// }
// console.log(reverseFunc('suriya'));

// const str1 = "GeeksForGeeks";
// const substrResult = str1.substr(2, 7); //It's take length.
// const substringResult = str1.substring(2, 7); // It's start to end string.

// console.log("Str.substr(7) =", substrResult);
// console.log("Str.substring(7) =", substringResult);

function twoSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === target) {
            return [left, right];
        } else if (sum < left) {
            left++;
        } else {
            right--;
        }
    }
    return [];
};

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));