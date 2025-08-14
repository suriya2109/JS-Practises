function movesZero(arr) {
    let LastNONZeroIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[LastNONZeroIndex] = arr[i];
            LastNONZeroIndex++;
        }
    }
    for (let i = LastNONZeroIndex; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}

console.log(movesZero([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]