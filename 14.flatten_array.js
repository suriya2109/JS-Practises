nestedArray = [1, 2, { name: "suriya" },
    [3, 4, 5, [6, 7]],
    [8, 9]
];

function flattenArr(nestedArray) {
    flatArr = [];
    nestedArray.forEach(item => {
        if (Array.isArray(item)) {
            flatArr = flatArr.concat(flattenArr(item));
        } else {
            flatArr.push(item)
        }
    });
    return flatArr;
}

console.log(flattenArr(nestedArray));

// Other Way
// let array = [21, 2, 34, {}, { name: "suriya" }[3, 45], 6, 7, [5, 67, [4, 9, 0]]];

// function findFalttenArray(array, falttenArry) {
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             // falttenArry = falttenArry.concat(findFalttenArray(array[i]));

//             findFalttenArray(array[i], falttenArry)
//         } else {
//             falttenArry.push(array[i]);
//         }
//     }
//     return falttenArry;
// }

// console.log(findFalttenArray(array, []));