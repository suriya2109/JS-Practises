function largestNumber(nums) {
    let num = nums.map(String);
    console.log(num);
    let result = num.sort((a, b) => {
        console.log((b + a) - (a + b))
    });
    // let result = num.sort((a, b) => (b + a).localeCompare(a + b));

    if (result[0] === '0') {
        console.log('0');
        return;
    }
    console.log(result.join(''));

}

// largestNumber([10, 2]); // "210"
largestNumber([3, 30, 34, 5, 9]); // "9534330"