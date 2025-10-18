function rotateArr(arr, d) {
    let n = arr.length;
    d = d % n;

    let left = 0;
    let right = d - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    left = d;
    right = n - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    left = 0;
    right = n - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr;

}

let arr = [1, 2, 3, 4, 5],
    d = 2;

console.log(rotateArr(arr, d));