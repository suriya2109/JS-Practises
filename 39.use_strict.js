// "use strict";

// 1)Undeclared variables;
// x = 15;
// console.log(x);

// 2)Read-only Properties

// const obj = {};
// Object.defineProperty(obj, "prop", { value: "100", writable: false });

// obj.prop = 150;
// console.log("Value changed");

// 3) This is a global object

// function show() {
//     console.log(this)
// }

// show();

// 4) Elimate with
// with statement is make the code harder and easier to predict the debugger

// with(Math) {
//     console.log(sin(90));
// }

// 5) secures eval
// "use strict";
// eval("var y = 100")

// console.log(y)

// 6) Duplicate in function
// "use strict";

function sum(a, a, c) {
    return a + a + c
}

console.log(sum(2, 5, 6))