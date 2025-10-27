    function twoSum(nums, target) {
        let resultArr = nums.sort((a, b) => a - b);

        for (let i = 0; i < resultArr.length - 2; i++) {
            let left = i + 1;
            let right = resultArr.length - 1;
            let requiredSum = target - resultArr[i];
            while (left < right) {
                let sum = resultArr[left] + resultArr[right];
                if (sum === requiredSum) {
                    return [i, left, right];
                } else if (sum > requiredSum) {
                    right--;
                } else {
                    left++;
                }
            }
        }
        return [];
    }
    let nums = [1, 4, 45, 6, 10, 8],
        target = 13;

    console.log(twoSum(nums, target));