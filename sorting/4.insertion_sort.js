function insertionSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let key = arr[i]; //Assumed as sorted array
        let j = i - 1; // to start after the sorted array element
        while (arr[j] >= 0 && arr[j] > key) { //check outbound && coming smallest value or not, to compare with the assummed value and sorted elements.
            arr[j + 1] = arr[j]; // to right shift side one index.
            j--; // keep it for all the elements
        }
        arr[j + 1] = key; //Insert the empty with the smallest value.
    }
    return arr;
}

let arr = [5, 2, 4, 3, 1];
console.log(insertionSort(arr));