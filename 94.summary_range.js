// Summary Range 
// Summary Ranges – Rubber Band Rule

// Mark start = nums[i]

// Stretch while nums[i+1] == nums[i] + 1 → i++

// Record: start==nums[i] ? "start" : "start->nums[i]", then i++

function SummaryRange(nums) {
    let result = [];
    let i = 0;

    while (i < nums.length) {
        let start = nums[i];
        while (nums[i + 1] == nums[i] + 1) {
            i++;
        }
        if (start == nums[i]) {
            result.push(`${nums[i]}`);
        } else {
            result.push(`${start} -> ${nums[i]}`);
        }
        i++;
    }
    return result;
}

console.log(SummaryRange([0, 1, 2, 4, 5, 7])); // Output: ["0->2", "4->5", "7"]