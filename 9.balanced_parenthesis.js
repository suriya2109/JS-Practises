function balancedParentheses(arr) {
    let stack = [];

    for (const char of arr) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0; // If stack is empty, it's balanced
}

console.log(balancedParentheses(")")); // false
console.log(balancedParentheses("(")); // false
console.log(balancedParentheses("()")); // true
console.log(balancedParentheses("(())")); // true
console.log(balancedParentheses("(()))")); // false

// Type 2
function isBalancedBrackets(str) {
    let stack = [];
    let bracketPairs = { ')': '(', '}': '{', ']': '[' }; // Matching pairs

    for (const char of str) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char); // Push opening brackets
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
                return false; // Unmatched or misordered bracket
            }
        }
    }

    return stack.length === 0; // If stack is empty, brackets are balanced
}

// Test Cases
console.log(isBalancedBrackets("(){}[]")); // true
console.log(isBalancedBrackets("({[]})")); // true
console.log(isBalancedBrackets("(]")); // false
console.log(isBalancedBrackets("{[}]")); // false
console.log(isBalancedBrackets("({[()]})")); // true
console.log(isBalancedBrackets("(((")); // false
console.log(isBalancedBrackets("({)}")); // false