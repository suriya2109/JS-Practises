// londest string array
// function findLongString(str) {
//     let words = str.split(' ');
//     longestWord = '';
//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }

// console.log(findLongString("Suriya is a businessman"));
// duplicate array
// let arr = [1, 2, 2, 3, 54, 56, 7, 8, 56, 9, 9, 8];

// function removeDuplicateArr(arr) {
//     return arr.filter((val, index, self) => (self.indexOf(val) == index));
// }

// console.log(removeDuplicateArr(arr));

// Reverse String
// function reverseString(str) {
//     // reverse = '';

//     // for (i = str.length - 1; i >= 0; i--) {
//     //     reverse = reverse +=str[i];
//     //     reverse += str[i];
//     // }
//     // return reverse;

//     return str.split('').reverse().join('');

// }

// console.log(reverseString('suriya'))


// arr = [3, 4, 5, 2, 6, 78, 3, 84];


// let maxArr = arr.sort((a, b) => b - a);
// console.log(maxArr);
// let minArr = arr.sort((a, b) => a - b);
// console.log(minArr);

// var createCounter = function(init) {
//     let count = init;
//     return {
//         increment: function() {
//             ++count;
//             return count;
//         }
//     }
// };

// const counter = createCounter(5)
// console.log(counter.increment()) // 6

var map = function(arr, fn) {
    retrunArray = [];
    // let multipleCount = fn;
    for (let i = 1; i <= arr.length; i++) {
        let count = i * fn;
        retrunArray.push(count)
    }
    return retrunArray;
};

console.log(map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 10));