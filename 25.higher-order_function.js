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