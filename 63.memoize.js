// const map = new Map();

// function memoization(fn) {
//     return function(...args) {
//         const key = JSON.stringify(args);
//         if (map.has(key)) {
//             console.log("Getting the cache value");
//             return map.get(key);
//         }
//         const result = fn(...args);
//         map.set(key, result);
//         console.log("Camputing value");
//         return result;
//     }
// }

// const add = (a, b) => a + b;
// const add_memo = memoization(add);
// console.log(add_memo(1, 2));
// console.log(add_memo(1, 2));


function memoize(fn) {
    const cache = new Map();
    let callCount = 0;

    const memoizedFunction = (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log("Getting from the cache");
            return cache.get(key);
        }
        callCount++;
        const result = fn(...args);
        cache.set(key, result);
        console.log("Computation from the values");
        return result;
    };

    memoizedFunction.getCallCount = () => callCount;

    return memoizedFunction;
}

// Example usage:
const sum = (a, b) => a + b;
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

// Memoized versions
const memoizedSum = memoize(sum);
const memoizedFib = memoize(fib);
const memoizedFactorial = memoize(factorial);

// Test cases
console.log(memoizedSum(2, 2)); // 4
console.log(memoizedSum(2, 2)); // 4 (cached)
console.log(memoizedSum.getCallCount()); // 1
console.log(memoizedSum(1, 2)); // 3
console.log(memoizedSum.getCallCount()); // 2

console.log(memoizedFactorial(2)); // 2
console.log(memoizedFactorial(3)); // 6
console.log(memoizedFactorial(2)); // 2 (cached)
console.log(memoizedFactorial.getCallCount()); // 2
console.log(memoizedFactorial(3)); // 6 (cached)
console.log(memoizedFactorial.getCallCount()); // 2

console.log(memoizedFib(5)); // 8
console.log(memoizedFib.getCallCount()); // 1