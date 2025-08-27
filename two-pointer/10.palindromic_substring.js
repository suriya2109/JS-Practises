function palindromicSubstring(s) {

    let count = 0;

    for (let i = 0; i < s.length; i++) {
        let right = i;
        let left = i;

        // for Odd length palindrom 
        helper(left, right);

        // for Even length palindrom 
        helper(left, right + 1);
    }

    // two pointer pattern 
    function helper(left, right) {
        while (left >= 0 && right <= s.length - 1 && s[right] === s[left]) {
            count++;
            left--;
            right++;
        }
    }
    return count;

}

let s = "abbac";
console.log(palindromicSubstring(s));