function compactObject(obj) {

    if (Array.isArray(obj)) {
        return obj
            .filter(Boolean)
            .map(item => Array.isArray(item) ? compactObject(item) : item);
    } else if (obj && typeof obj === "object") {
        const result = {};
        for (const key in obj) {
            if (Boolean(obj[key])) {
                result[key] = compactObject(obj[key]);
            }
        }
        return result;
    }
    return obj;
}

obj = [0, false, 1, "2", null];
obj2 = { "a": null, "b": [false, 1] }
obj3 = [null, 0, 5, [0],
    [false, 16]
]
console.log(compactObject(obj));
console.log(compactObject(obj2));
console.log(compactObject(obj3));