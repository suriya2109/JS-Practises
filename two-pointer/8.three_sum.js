/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length === 0) return [];
    nums = nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Two pointer method
        let j = i + 1;
        let k = nums.length - 1;
        // Stop duplicates for element i
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        while (j < k) {

            let sum = nums[i] + nums[j] + nums[k];

            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]]);
                // Stop duplicates for element j & k
                while (nums[j] === nums[j + 1]) j++;
                while (nums[k] === nums[k + 1]) k--;
                j++;
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    return result;
};

let nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));