// function deepEqual(a, b) {
//     // 1. If values are exactly the same
//     if (a === b) return true;

//     // 2. If either is null or not an object, they are not equal
//     if (
//         a === null || b === null ||
//         typeof a !== "object" || typeof b !== "object"
//     ) {
//         return false;
//     }

//     // 3. Get keys of both objects
//     let keysA = Object.keys(a);
//     let keysB = Object.keys(b);

//     // 4. Different number of properties → not equal
//     if (keysA.length !== keysB.length) return false;

//     // 5. Check every key recursively
//     for (let key of keysA) {
//         if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
//             return false;
//         }
//     }

//     // 6. All checks passed
//     return true;
// }

// console.log(deepEqual(1, 1));
// // true

// console.log(deepEqual({ a: 1 }, { a: 1 }));
// // true

// console.log(deepEqual({ a: 1 }, { a: 2 }));
// // false

// console.log(deepEqual({ a: { b: 2 } }, { a: { b: 2 } }));
// // true

// console.log(deepEqual({ a: 1, b: 2 }, { a: 1 }));
// // false

// console.log(deepEqual(null, null));
// // true

// console.log(deepEqual(null, {}));
// false

// function filter(array, test) {
//     let passed = [];
//     for (let element of array) {
//         if (test(element)) {
//             passed.push(element);
//         }
//     }
//     return passed;
// }
// console.log(filter(SCRIPTS, script => script.living));
// → [{name: "Adlam", …}, …]


const obj = function() {
    let counter = 0;
    return function increment() {
        counter++;
        return counter;
    }
}

let obj1 = obj();
let obj2 = obj();

console.log(obj1());
console.log(obj1());
console.log(obj2());

// const text = {
//     name: "abc",
//     function text()=>{
//         return:{
//             console.log(this.name)
//         }
//     }
// }