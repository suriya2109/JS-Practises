var containsNearbyDuplicate = function(nums, k) {
    let seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i]) && i - seen.get(nums[i]) <= k) {
            return true;
        }
        seen.set(nums[i], i);
    }
    return false;
};

const nums = [1, 2, 3, 1, 2, 3];
const k = 2;

console.log(containsNearbyDuplicate(nums, k));