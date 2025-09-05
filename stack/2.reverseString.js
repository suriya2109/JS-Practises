var reverseStr = function(s, k) {
    let arr = s.split('');
    for (let i = 0; i < arr.length - 1; i += 2 * k) {
        // characters for every 2k 
        let left = i;
        let right = Math.min(i + k - 1, arr.length - 1);
        // lastly, values will be (2,1)
        // protect against going out of bounds
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join('');
};


let s = "abcdefg"
let k = 2;

console.log(reverseStr(s, k))