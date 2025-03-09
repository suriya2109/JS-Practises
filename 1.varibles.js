// Function Scope
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i)
    }, i * 1000);
}

// ----------------

// ✅ Expected: 0, 1, 2, 3, 4
// ❌ Actual Output: 5, 5, 5, 5, 5
// 🔹 Why?

// var is function-scoped, meaning there is only one i shared across all iterations.
// By the time setTimeout runs, i has already reached 5.

// Block Scope
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i)
    }, i * 1000);
}

// ----------------

// IIFE
for (var i = 0; i < 5; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i)
        }, i * 1000);
    }(i));
}
(function() {
    console.log("Suriya")
}());

// What is an IIFE (Immediately Invoked Function Expression)? 
// An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is defined and executed immediately after it's created.