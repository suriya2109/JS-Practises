// The map() method in JavaScript is used to create a new array by applying a specified function to each element in an existing array.

let a = [2, 5, 6, 3, 8, 9];

// Using map to transform elements
let res = a.map(function(val, index) {
    return { key: index, value: val * val };
})

console.log(res);