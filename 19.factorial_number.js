function findFactorialNum(num) {

    if (num === 0) {
        return 1;
    }
    let factorialNum = 1;
    for (let i = 1; i <= num; i++) {
        factorialNum *= i;
    }
    return factorialNum;
}

console.log(findFactorialNum(5));