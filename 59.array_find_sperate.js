function chunkArray(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}


// Example usage
console.log(chunkArray([1, 2, 3, 4, 5], 1)); // [[1],[2],[3],[4],[5]]
console.log(chunkArray([1, 9, 6, 3, 2], 3)); // [[1,9,6],[3,2]]
console.log(chunkArray([8, 5, 3, 2, 6], 6)); // [[8,5,3,2,6]]
console.log(chunkArray([], 1)); // []