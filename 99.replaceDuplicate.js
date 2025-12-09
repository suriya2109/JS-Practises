function transform(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                arr[i] = 1;
                arr[j] = 1;
            }
        }
    }
    return arr;
}

console.log(transform([1, 2, 3, 2, 3, 4]));