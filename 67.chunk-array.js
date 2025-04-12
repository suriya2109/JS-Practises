function chunkArr(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        // Step 1: JS 
        // result.push(arr.slice(i, i + size));

        // Step 2: JS 
        const subArray = [];
        for (let j = i; j < i + size && j < arr.length; j++) {
            subArray.push(arr[j]);
        }
        result.push(subArray)
    }
    return result;
}

console.log(chunkArr([1, 2, 3, 4, 5], 3));