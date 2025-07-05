// function findFactorialNum(num) {

//     // if (num === 0) {
//     //     return 1;
//     // }
//     // let factorialNum = 1;
//     // for (let i = 1; i <= num; i++) {
//     //     factorialNum *= i;
//     // }
//     // return factorialNum;
//     if (num > 2) {
//         return num;
//     }
//     return findFactorialNum(num - 1) + findFactorialNum(num - 2);
// }

// console.log(findFactorialNum(5));

function fibonacci(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));