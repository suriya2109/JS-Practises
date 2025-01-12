nestedArray = [1, 2, [3, 4, 5, [6, 7]],
    [8, 9]
];

function flattenArr(nestedArray) {
    flatArr = [];
    nestedArray.forEach(item => {
        if (Array.isArray(item)) {
            flatArr = flatArr.concat(flattenArr((item)));
        } else {
            flatArr.push(item)
        }
    });
    return flatArr;
}

console.log(flattenArr(nestedArray));