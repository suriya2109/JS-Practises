function selectionSort(arr) {
    let n = arr.length;

    // loop through the array
    for (let i = 0; i < n - 1; i++) {
        // assume the current index is the smallest
        let minIndex = i;

        // check the rest of the array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // update smallest element index
            }
        }

        // swap if a smaller element is found
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Example
console.log(selectionSort([64, 25, 12, 22, 11]));
// Output: [11, 12, 22, 25, 64]