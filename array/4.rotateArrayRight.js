/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // edge case
    if (k === nums.length || nums.length === 1 || nums.length === null) {
        return;
    }

    if (k > nums.length) {
        k = k % nums.length;
    }

    let left = 0;
    let right = nums.length - 1 - k; //(first half)
    let nextLeft = right + 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
    right = nums.length - 1;
    while (nextLeft < right) {
        [nums[nextLeft], nums[right]] = [nums[right], nums[nextLeft]];
        nextLeft++;
        right--;
    }
    left = 0;
    right = nums.length - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
    return nums;
};

let nums = [1, 2, 3, 4, 5],
    k = 2;

console.log(rotate(nums, k));