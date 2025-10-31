var isValid = function(s) {
    let stack = [];
    let bracketPairs = { ')': '(', '}': '{', ']': '[' };

    for (let char of s) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
            return false;
        }
    }
    return stack.length === 0;
};