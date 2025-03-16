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

var flat = function(arr, n) {
    let flattenedArr = [];

    arr.forEach((item) => {
        if (Array.isArray(item)) {
            // flattenedArr = flattenedArr.concat(flat(item, n - 1));] // Correct recursive call
            flattenedArr.push(...flattenedArr(item, n - 1))
        } else {
            flattenedArr.push(item);
        }
    });
    return flattenedArr;
};

// Test Cases
console.log(flat([1, 2, 3, 4, [4, 55, 6],
    [5, 7, [7, 9, 20]]
], 0));
// Output: [1, 2, 3, 4, [4, 55, 6], [5, 7, [7, 9, 20]]] (unchanged)

console.log(flat([1, 2, 3, 4, [4, 55, 6],
    [5, 7, [7, 9, 20]]
], 1));
// Output: [1, 2, 3, 4, 4, 55, 6, 5, 7, [7, 9, 20]] (flattened 1 level)

console.log(flat([1, 2, 3, 4, [4, 55, 6],
    [5, 7, [7, 9, 20]]
], 2));
// Output: [1, 2, 3, 4, 4, 55, 6, 5, 7, 7, 9, 20] (flattened 2 levels)