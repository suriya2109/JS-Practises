function validPalindromeTwo(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] === str[right]) {
            left++;
            right--;
        } else {
            console.log("one")
            return isPal(s, left + 1, right) || isPal(s, left, right - 1);
        }
    };
    return true;

    function isPal(s, left, right) {
        while (left < right) {
            if (s[right] !== s[left]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
};

let s = "wowb";

console.log(validPalindromeTwo(s));