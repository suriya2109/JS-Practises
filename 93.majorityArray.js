/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let majorityArr = null;

    for (let num of nums) {
        if (count === 0) {
            majorityArr = num;
        }

        count += (num === majorityArr) ? 1 : -1;
    }

    return majorityArr;
};

let nums = [1, 2, 2, 2, 2, 1, 1, 3, 3];

console.log(majorityElement(nums));