let reduce = function(num, fn, initial) {
    let val = initial;

    for (i = 0; i < num.length; i++) {
        val = fn(val, num[i]);
    }
    return val;
}

// Summing all elements
console.log(reduce([1, 2, 3, 4], (acc, curr) => acc + curr, 0)); // Output: 10

// Multiplying all elements
console.log(reduce([1, 2, 3, 4], (acc, curr) => acc * curr, 1)); // Output: 24

// Handling an empty array
console.log(reduce([], (acc, curr) => acc + curr, 10)); // Output: 10