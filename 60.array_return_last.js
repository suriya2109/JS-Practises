// Array.prototype.last = function() {
//     return this.length > 0 ? this[this.length - 1] : -1;
// }

// console.log([1, 2, 3].last());
// console.log([].last());

function arrFind(arr) {
    if (arr.length === 0) return -1;
    let keepArray = [];
    for (i = arr.length - 1; i >= 0; i--) {
        if (arr.length > 0) {
            let lastArray = arr[i];
            keepArray.push(lastArray);
        };
        return keepArray.toString();
    }
}

console.log(arrFind([]));
console.log(arrFind([1, 2, 3, 4, 5]));