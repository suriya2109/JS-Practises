function counter() {
    let counter = 0;
    return {
        increment: function() {
            counter += 1;
            return counter;
        },
        reset: function() {
            counter = 0;
            return counter;
        },
        display: function() {
            let message = "The counts" + counter;
            return message;
        }
    }
};

let mycount = counter();
console.log(mycount.increment());
console.log(mycount.increment());
console.log(mycount.increment());
console.log(mycount.reset());
console.log(mycount.increment());
console.log(mycount.increment());
console.log(mycount.increment());