// It's Normal way to do the problem Type 1:

// function findDuplicateValue(arr) {

//     let map = new Map();

//     for (let char of arr) {
//         if (!map.has(char)) {
//             map.set(char);
//         } else {
//             return char;
//         }
//     }

// }

// let nums = [1, 3, 4, 2, 2];

// console.log(findDuplicateValue(nums));

function findDuplicateValue(nums) {
    // let slow = 0;
    // let fast = 0;

    // do {
    //     slow = nums[slow];
    //     fast = nums[nums[fast]];
    // }
    // while (slow != fast);

    // slow = 0;
    // while (slow != fast) {
    //     slow = nums[slow];
    //     fast = nums[fast];
    // }
    // return slow;

    for (let i of nums) {
        i = Math.abs(i);
        // step 2: condition if the element comes again, if statifies the condition return it.
        if (nums[i - 1] < 0) {
            return i;
        }
        nums[i - 1] *= -1;
        // Step 1: multiple with -1
    }
}

let nums = [3, 1, 3, 4, 2];
console.log(findDuplicateValue(nums));