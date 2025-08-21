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