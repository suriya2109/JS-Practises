// function arrayIntersection(arr1, aar2) {

//     let set1 = new Set(arr1);

//     const result = aar2.filter(item => set1.has(item))
//     return [...new Set(result)];
// }

// console.log(arrayIntersection([1, 2, 3, 3, 6], [2, 6, 6, 8]));

function arrIntersection(arr1, arr2) {
    const array1 = new Set(arr1);
    result = [];
    arr2.filter((item) => {
        if (array1.has(item)) {
            result.push(item);
        }
    })
    return result;
}

console.log(arrIntersection([1, 2, 3, 4, 5], [2, 2, 3, 5, 6]));