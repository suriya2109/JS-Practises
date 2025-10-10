var evalRPN = function(tokens) {
    let stack = [];
    for (let token of tokens) {
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            b = stack.pop();
            a = stack.pop();

            if (token === "+") {
                stack.push(a + b);
            } else if (token === "-") {
                stack.push(a - b);
            } else if (token === "*") {
                stack.push(a * b);
            } else if (token === "/") {
                stack.push(Math.trunc(a / b));
            }
        } else {
            stack.push(Number(token));
        }
    }
    return stack[0];
};

let tokens = ["2", "1", "+", "3", "*"];

console.log(evalRPN(tokens));