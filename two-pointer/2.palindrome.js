function checkPalindrome(str) {

    // let left = 0;
    // let right = str.length - 1;
    // while (left < right) {
    //     if (str[left] !== str[right]) {
    //         return false;
    //     }
    //     left++;
    //     right--;
    //     // Until the value of the left and right.
    // }
    // return true;


    if (str < 0) return false;
    let origin = str;
    reversed = 0;
    while (str > 0) {
        reversed = reversed * 10 + (str % 10);
        console.log(reversed * 10 + (str % 10));
        str = Math.floor(str / 10);
        console.log(origin, str);
    }

    return origin === reversed;
}

console.log(checkPalindrome(121));