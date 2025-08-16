// A Monotonic Stack is just a stack that stays sorted (increasing or decreasing) while processing, used to efficiently find the next greater/smaller element in one pass.

var nextGreaterElement = function(nums1, nums2) {
    let map = new Map(); // num → its next greater
    let stack = [];

    for (let num of nums2) {
        while (stack.length && stack[stack.length - 1] < num) {
            map.set(stack.pop(), num);
        }
        stack.push(num);
    }

    return nums1.map(num => map.get(num) || -1);
};

let nums1 = [4, 1, 2];
let nums2 = [1, 3, 4, 2];

nextGreaterElement(nums1, nums2);