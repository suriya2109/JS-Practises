function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function higherOrderFunc(x, y, anyfunction) {
    return anyfunction(x, y);
}

console.log(higherOrderFunc(3, 4, add));
console.log(higherOrderFunc(3, 4, multiply));

// What are Higher-Order Functions? Can you give an example? 

// Higher-order functions are functions that can either take other functions as arguments or return a function as a result