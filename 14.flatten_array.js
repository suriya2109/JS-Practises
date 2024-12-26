nestedArray = [1, 2, [3, 4, 5, [6, 7]],
    [8, 9]
];
console.log(flattenArr(nestedArray));

function flattenArr(arr) {
    flatArr = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            flatArr = flatArr.concat(flattenArr(item));
        } else {
            flatArr.push(item);
        }
    });
    return flatArr;
}