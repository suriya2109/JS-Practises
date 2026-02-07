// function every(array, test) {
//     if (array.length === 0) return true;
//     for (let element of array) {
//         if (!test(element)) {
//             return false;
//         } else {
//             return true;
//         }
//     }
// }

// let arr = [2, 2, 6];

// console.log(every(arr, n => n % 2 === 0)); // false

// function every(arr, predicate) {
//     for (const element of arr) {
//         if (!predicate(element)) {
//             return false
//         }
//     }
//     return true
// }

// console.log(every([4, 2, 8], n => n % 2 === 0));

// function some(arr, predicate) {
//     for (const element of arr) {
//         if (predicate(element)) {
//             return true
//         }
//     }
//     return false;
// }

// console.log(some([1, 3, 5], n => n % 2 === 0));

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved");
    }, 1000);
});

async function asyncPromise() {
    let result = await promise;
    console.log(result);
}

// promise.then((result) => {
//     console.log(result);
// })