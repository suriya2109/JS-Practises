var filter = function(arr, fn) {
    let returnedArray = [];
    for (let i = 0; i <= arr.length; i++) {
        if (fn(arr[i], i)) {
            returnedArray.push(arr[i]);
        }
    }
    return returnedArray;
};

console.log(filter([0, 10, 20, 30], (n) => (n > 10)));