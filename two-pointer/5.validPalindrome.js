// Step 1 clearString:
// Step 2 two pointer to check palindrome;

function validPalindrome(s) {
    let checkedStr = clearStr(s);
    return isPalindrome(checkedStr);
}

function clearStr(str) {
    let result = "";
    let char = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < str.length; i++) {
        let lCase = str[i].toLowerCase();
        if (char.indexOf(lCase) !== -1) {
            result += lCase;
        }
    }
    return result;
}

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

let s = "A man, a plan, a canal: Panama";

console.log(validPalindrome(s));