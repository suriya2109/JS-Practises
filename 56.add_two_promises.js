// let addTwoPromise = async function(promise1, promise2) {
//     // Type1
//     // const [value1, value2] = await Promise.all([promise1, promise2]);
//     // return value1 + value2;

//     // Type2
//     const value1 = await promise1;
//     const value2 = await promise2;
//     return value1 + value2;
// }

// addTwoPromise(Promise.resolve(2), Promise.resolve(3))
//     .then(console.log);

console.log([1, 2].map((num) => {
    if (num > 0) return;
    return num * 2;
}));