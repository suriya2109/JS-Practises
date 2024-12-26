let arr = [60, 83, 97, 45, 62];

// let arrMax = arr.sort((a,b) =>

//     b-a  
// );
// // console.log(arrMax[0]);
// let arrMin = arr.sort((a,b) =>

//     a-b  
// );

// // console.log(arrMin[0]);

// var minArr = Infinity;
// var maxArr = -Infinity;

// for (let item of arr) {
//     // Find minimum value
//     if (item < minArr) {
//         minArr = item;
//         // console.log(minArr);
//     }
//     // Find maximum value
//     if (item > maxArr) {
//         maxArr = item;
//         // console.log(maxArr);
//     }
// }
// // console.log(minArr);
// // console.log(maxArr);

let Arr = [50, 60, 20, 10, 40];
let minValue = Math.min(...Arr);
let maxValue = Math.max(...Arr);
console.log("Minimum element is:" + minValue);
console.log("Maximum Element is:" + maxValue);


// For loop

// function maxValue() {

//     let arr = [2, 54, 8, 9, 4];

//     let largestValue = 0;

//     for (let i = 1; i <= arr.length; i++) {
//         if (arr[i] > largestValue) {
//             largestValue = arr[i];
//         }
//     }
//     return largestValue;
// }

// console.log(maxValue())