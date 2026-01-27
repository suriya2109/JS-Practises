// console.log([0, 1, 2, 3, 4].slice(1, 4));
// // → [2, 3]
// console.log([0, 1, 2, 3, 4].slice(2));
// // → [2, 3, 4]

// function remove(array, index) {
//     return array.slice(0, index)
//         .concat(array.slice(index + 1));
// }
// console.log(remove(["a", "b", "c", "d", "e"], 2));

// function range(start, end) {
//     let array = [];
//     let sum = 0;
//     for (let i = start; i <= end; i++) {
//         sum += i;
//         array.push(i);
//     }
//     return array;
// }

// console.log(range(1, 10));

function arrayToList(array) {
    let list = null;

    for (let i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list
        };
    }

    return list;
}

function listToArray(list) {
    let array = [];
    let node = list;

    while (node !== null) {
        array.push(node.value);
        node = node.rest;
    }

    return array;
}

function prepend(value, list) {
    return {
        value: value,
        rest: list
    };
}

function nth(list, n) {
    let index = 0;
    let node = list;

    while (node !== null) {
        if (index === n) return node.value;
        node = node.rest;
        index++;
    }

    return undefined;
}

function nthRecursive(list, n) {
    if (list === null) return undefined;
    if (n === 0) return list.value;
    return nthRecursive(list.rest, n - 1);
}

const list = arrayToList([1, 2, 3]);

console.log(list);
// { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }

console.log(listToArray(list));
// [1, 2, 3]

console.log(prepend(0, list));
// { value: 0, rest: { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } } }

console.log(nth(list, 1));
// 2

console.log(nthRecursive(list, 2));
// 3