Array.prototype.groupBy = function(fn) {
    return this.reduce((acc, item) => {
        const key = fn(item);
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {});
};

// Example usage
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.groupBy(n => n % 2 === 0 ? "even" : "odd"));
const numbers2 = [1, 2, 3, 4, 5, 6];
console.log(numbers2.groupBy(n => n > 5));
// Output: { "odd": [1, 3, 5], "even": [2, 4, 6] }