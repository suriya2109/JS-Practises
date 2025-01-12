// Function Scope
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i)
    }, i * 1000);
}
// Block Scope
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i)
    }, i * 1000);
}

// IIFE
for (var i = 0; i < 5; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i)
        }, i * 1000);
    }(i));
}