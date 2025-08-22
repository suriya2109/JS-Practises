var firstPalindrome = function(words) {
    function isPalindrome(words) {
        left = 0;
        right = words.length - 1;

        while (left < right) {
            if (words[right] !== words[left]) {
                return "";
            }
            left++;
            right--;
        }
        return words;
    }
    for (let word of words) {
        if (isPalindrome(word)) {
            return word;
        }
    }
    return "";
};

let words = ["car", "racecar", "cool"];
console.log(firstPalindrome(words));