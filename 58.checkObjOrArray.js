function isEmpty(obj) {
    if (Array.isArray(obj)) {
        return obj.length === 0;
    } else {
        const checking = Object.keys(obj).length === 0
        return {
            checking,
            // "object"
        };
    }
}

// console.log(isEmpty({}));
// console.log(isEmpty({ name: "suriya" }));
// console.log(isEmpty([]));
console.log(isEmpty([87]));