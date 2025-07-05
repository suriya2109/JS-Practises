// // const user = {
// //     name: eve,
// //     greet() {
// //         console.log(this.name)
// //         const inner = () => {
// //             console.log(this.name);
// //         };
// //         inner();
// //     },
// // }

// // user.greet();

// var a = 10;

// // let items = 10;
// console.log(a);

// const arr = [1, [2, [3, [4]]]];

// function arrayFlating(arr, n) {
//     let arrFlated = [];

//     arr.forEach(arr => {
//         if (Array.isArray(arr) && n > 0) {
//             // arrFlated = arrFlated.concat(arrayFlating(arr));
//             arrFlated.push(...arrayFlating(arr, n - 1))
//         } else {
//             arrFlated.push(arr);
//         }
//     });
//     return arrFlated;
// }

// console.log(arrayFlating(arr, 2));

// const str = ;

function reverseStr(str) {
    emptyStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        emptyStr += str[i];
    }
    return emptyStr;
}

console.log(reverseStr("suriya"))