function merge(nums1, m, nums2, n) {
    let i = m - 1; // last valid element in nums1 (3);
    let j = n - 1; // last element in nums2 (6)
    let k = m + n - 1; // last index of nums1

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]; //Move the corresponding pointer backward (i--).
            i--;
        } else {
            nums1[k] = nums2[j]; //Move the corresponding pointer backward j--
            j--;
        }
        k--; //We fill nums1 from the end to the beginning (k-- each time):
    }
    return nums1;
}
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
console.log(merge(nums1, m, nums2, n));