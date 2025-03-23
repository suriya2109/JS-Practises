var twoSum = function(nums, target) {
    // My try Its my method
    // firstVal = Infinity;
    // secondVal = Infinity;
    // for (let i = 0; i < nums.length; i++) {
    //     const firstVal = secondVal;
    //     secondVal = nums[i];
    //     let targetVal = firstVal + secondVal;
    //     if (targetVal === target) {
    //         let firstIndex = nums.indexOf(firstVal);
    //         let secondIndex = nums.indexOf(secondVal);
    //         return {
    //             firstIndex,
    //             secondIndex
    //         }
    //     }
    // }
    // Step 2 Brute force method
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j]
    //         }
    //     }
    // }
    // step 3 Hash map
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
            // return [complement, nums[i]]; //values
        }
        map.set(nums[i], i);
    }
    return [];
};
console.log(twoSum([1, 2, 3, 4], 7));