Array.prototype.groupBy = function(func) {
    return this.reduce((acc, item) => {
        const key = func(item)
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {});
};

const array1 = [{ "name": "Suriya" }, { "name": "Suriya" }, { "name": "Laksh" }];
console.log(array1.groupBy(item => item.name));