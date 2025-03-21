/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    // return arr1.concat(arr2);

    // Step 1
    let result = arr1.concat(arr2);

    // Step 2
    let map = new Map();

    // arr1.forEach(obj=>map.set(obj.id,obj));
    // arr2.forEach(obj=>map.set(obj.id,obj));

    // return Array.from(map.values());

    // Step 3

    arr1.forEach(obj => map.set(obj.id, structuredClone(obj)));
    arr2.forEach(obj => {
        if (map.has(obj.id)) {
            map.set(obj.id, {...map.get(obj.id), ...obj });
        } else {
            map.set(obj.id, structuredClone(obj));
        }
    });
    return Array.from(map.values()).sort((a, b) => (a.id - b.id));
};


// Step1
// arr1 = [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9}
// ], 
// arr2 = [
//     {"id": 3, "x": 5}
// ]
// Step 2:

// arr1 = [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 3, "y": 6}
// ], 
// arr2 = [
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]

arr1 = [
    { "id": 1, "b": { "b": 94 }, "v": [4, 3], "y": 48 }
]
arr2 = [
    { "id": 1, "b": { "c": 84 }, "v": [1, 3] }
]

console.log(join(arr1, arr2));