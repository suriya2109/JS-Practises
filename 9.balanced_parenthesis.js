function balancedParenthess(arr) {

    stack = [];

    for (const char of arr) {
        if (char == '(') {
            stack.push(char);
        } else if (char == ')') {
            if (stack.length == 0) {
                return true;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}

console.log(balancedParenthess(')'));