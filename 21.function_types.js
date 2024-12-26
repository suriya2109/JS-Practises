// 1) named function 

function sum(a, b) {
    return a + b;
}
console.log(sum(2, 5));

// 2) anonymous function

console.log(function(a, b) {
    return a * b;
}(4, 3));

// 3) Arrow Function

const add = (x, y) => (x + y);

console.log(add(8, 4))

// 4) Callback function

function display(x, y, operation) {
    const addPuls = operation(x, y);
    console.log(addPuls);
}
display(10, 5, add);

const number = [1, 2, 3, 4, 5];

function loop(number) {
    console.log(number);
}

number.forEach(loop);

// 5) Event handling

// <button id="myButton">Click Me</button>

// let button = document.getElementById("myButton");

// button.addEventListener('click', () => {
//     console.log(button);
// })

// 6) Higer-order function

// exmple:1

function hof(func) {
    func();
    // console.log(func())
}

hof(sayHello);
// console.log(sayHello)

function sayHello() {
    console.log("hello!")
}

// example:2

function create(number) {
    return function(value) {
        return result = value + number;
    }
}

const addNumbers = create(5);

console.log(addNumbers(2), "higher order");