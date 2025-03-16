var filter = function(arr, fn) {
    let returnedArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (Boolean(fn(arr[i], i))) {
            returnedArray.push(arr[i]);
        }
    }
    return returnedArray;
};

console.log(filter([0, 10, 20, 30], (n) => n > 10));
console.log(filter([1, 2, 3], (n, i) => i === 0));
const result = filter([-2, -1, 0, 1, 2], (n) => n + 1);
console.log(result)