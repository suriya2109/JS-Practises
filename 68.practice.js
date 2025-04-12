function counter() {
    let count = 0;
    return {
        incrument: function() {
            count += 1;
            return count;
        },
        decrument: function() {
            count -= 1;
            return count;
        },
        display: function() {
            const result = "the count of result is: " + count;
            return result;
        },
    }
}

let counterNumber = counter();

console.log(counterNumber.incrument());
// console.log(counterNumber.decrument());
console.log(counterNumber.incrument());
// console.log(counterNumber.decrument());
console.log(counterNumber.display());