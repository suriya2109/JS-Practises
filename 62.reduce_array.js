const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, item) => acc + item, 0);

console.log(sum); // Output: 15

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = fruits.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});

console.log(fruitCount);