function chunk(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        // JS In-build method
        // result.push(arr.slice(i, i + size));

        // JS algorithm
        let subArray = [];
        for (let j = i; j < i + size && j < arr.length; j++) {
            subArray.push(arr[j]);
        }
        result.push(subArray);
    }
    return result;
}

console.log(chunk([1, 2, 3, 4, 5], 4))
console.log(chunk([1, 2, 3, 4, 5], 2))
console.log(chunk([1, 2, 3, 4, 5], 1))
console.log(chunk([1, 2, 3, 4, 5], 3))