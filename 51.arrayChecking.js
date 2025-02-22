function check(num) {
    even = [];
    odd = []
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            even.push(num[i]);
        } else {
            odd.push(num[i]);
        }
    }
    return {
        even,
        odd
    };
};
return console.log(check([1, 2, 3, 4, 2, 88, 87]));