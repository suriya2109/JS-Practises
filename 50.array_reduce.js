let reduce = function(nums, fn, inital) {
    let val = inital;

    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
}

console.log(reduce([1, 2, 3, 4], ((acc, cur) => acc + cur), 0));

console.log(reduce([1, 2, 3, 4], ((acc, cur) => acc * cur), 1));
console.log(reduce([0], ((acc, cur) => acc + cur), 10));