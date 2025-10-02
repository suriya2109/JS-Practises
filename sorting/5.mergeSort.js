var sortArray = function(nums) {

    function mergeSort(arr, l, r) {

        if (l >= r) return; // if the element is 0 or has one value;

        // find mid
        let mid = Math.floor((l + r) / 2);

        // left sort half
        mergeSort(arr, l, mid);

        // right sort half
        mergeSort(arr, mid + 1, r);

        merge(arr, l, mid, r);
    }

    function merge(arr, l, mid, r) {
        let left = arr.slice(l, mid + 1);
        let right = arr.slice(mid + 1, r + 1);

        let i = 0,
            j = 0,
            k = l;

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
            }
        }

        while (i < left.length) arr[k++] = left[i++];
        while (j < right.length) arr[k++] = right[j++];
    }

    mergeSort(nums, 0, nums.length - 1);
    return nums;
};

let nums = [5, 2, 3, 1];
console.log(sortArray(nums));