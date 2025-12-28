var jump = function(nums) {
    let jumpTotal = 0;
    let covergae = 0;
    let lastJumpIndex = 0;
    let goal = nums.length - 1;

    // Base Case
    if (nums.length < 1) return 0;

    for (let i = 0; i < nums.length - 1; i++) {
        covergae = Math.max(covergae, i + nums[i]);

        if (i === lastJumpIndex) {
            lastJumpIndex = covergae;
            jumpTotal++;

            if (covergae >= goal) {
                return jumpTotal;
            }
        }
    }
    return jumpTotal;
};

let nums = [2, 3, 1, 1, 4];

console.log(jump(nums));