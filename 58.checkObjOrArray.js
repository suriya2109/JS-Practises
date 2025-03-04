function isEmpty(obj) {
    if (Array.isArray(obj)) {
        return obj.length === 0;
    } else {
        return Object.keys(obj).length === 0;
    }
}

console.log(isEmpty({}));
console.log(isEmpty({ name: "suriya" }));
console.log(isEmpty([]));
console.log(isEmpty([87]));