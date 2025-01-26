// function sum(a) {
//     return function(b) {
//         return function(c) {
//             return function(d) {
//                 return function(e) {
//                     return a + b + c + d + e;
//                 }
//             }
//         }
//     }
// }
// let total = sum(2)(3)(4)(5)(6);

// console.log(total);

// Q 2

// Closure means that an inner function has access to the variables of its outer function, even after the outer function has returned.
// function exam() {
//     const name = "rowdy";

//     function inner() {
//         return name;
//     }
//     return inner;
// }

// const inn_fuc = exam();

// console.log(inn_fuc);
// console.log(inn_fuc());


function counter() {
    let counter = 0;
    return {
        increment: function() {
            counter++;
            return counter;
        },
        decrement: function() {
            counter--;
            return counter;
        },
        displayCount: function() {
            let message = "The current count " + counter;
            return message;
        }
    }
}

const myCount = counter();
console.log(myCount.increment());
// console.log(myCount.decrement());
console.log(myCount.displayCount());