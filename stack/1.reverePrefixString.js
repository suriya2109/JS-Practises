function reversePrefixString(word, ch) {
    let idx = word.indexOf(ch);

    // Edge Case 
    if (idx === -1) return word;

    let arr = word.split('');

    let left = 0;
    let right = idx;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join('')
};

let word = "abcdefd";
let ch = "d";
console.log(reversePrefixString(word, ch))