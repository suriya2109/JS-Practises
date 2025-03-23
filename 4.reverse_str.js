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

let addSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            // return [map.get(complement), i]; Indecies 
            return [complement, nums[i]]; //values
        }
        map.set(nums[i], i);
    }
    return [];
}

console.log(addSum([2, 5, 6, 7, 8], 9));