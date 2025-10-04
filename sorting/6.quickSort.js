class Solution {

    // 🔹 Partition function: rearranges elements around a pivot
    partition(arr, low, high) {

        // Choose the last element as pivot
        let pivot = arr[high];

        // i keeps track of the "smaller element" boundary
        let i = low - 1;

        // Traverse the array from low to high - 1
        for (let j = low; j < high; j++) {

            // If current element is smaller than pivot
            if (arr[j] < pivot) {
                i++; // move the boundary forward

                // Swap arr[i] and arr[j] so smaller element moves left
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        // After loop ends, place pivot in its correct position
        // (i + 1) is the index where pivot should go
        let temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        // Return pivot index — position where array is now partitioned
        return i + 1;
    }

    // 🔹 Main QuickSort function (recursive)
    quickSort(arr, low, high) {

        // Base condition — when low >= high, stop recursion
        if (low < high) {

            // Partition the array and get pivot index
            let pi = this.partition(arr, low, high);

            // Recursively sort left half (elements smaller than pivot)
            this.quickSort(arr, low, pi - 1);

            // Recursively sort right half (elements greater than pivot)
            this.quickSort(arr, pi + 1, high);
        }
    }
}


let object = new Solution;

let arr = [10, 7, 8, 9, 1, 5];
object.quickSort(arr, 0, arr.length - 1)
console.log(arr);