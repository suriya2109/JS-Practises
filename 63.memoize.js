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


const map = new Map();

function memoize(fn) {
    return function(...arg) {
        const key = JSON.stringify(arg);
        if (map.has(key)) {
            console.log("getting from cache");
            return map.get(key);
        }
        const result = fn(...arg);
        map.set(key, result);
        console.log("computing values")
        return result;
    }
}

const add = (a, b) => (a + b);

const add_memo = memoize(add);


console.log(add_memo(2, 4));
console.log(add_memo(2, 4));