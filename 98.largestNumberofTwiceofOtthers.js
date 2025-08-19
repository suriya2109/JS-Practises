var dominantIndex = function(nums) {
    let max = -1;
    let secondMax = -1;
    let index = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            secondMax = max;
            max = nums[i];
            index = i;
        } else if (nums[i] > secondMax)
            secondMax = nums[i];
    }
    if (max >= 2 * secondMax) {
        console.log(max, secondMax)
        return index;
    }
    return -1;
};
let nums = [3, 6, 1, 0];
console.log(dominantIndex(nums));