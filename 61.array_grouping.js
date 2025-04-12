// Array.prototype.groupBy = function(func) {
//     return this.reduce((acc, item) => {
//         const key = func(item)
//         if (!acc[key]) acc[key] = [];
//         acc[key].push(item);
//         return acc;
//     }, {});
// };

// const array1 = [{ "name": "Suriya" }, { "name": "Suriya" }, { "name": "Laksh" }];
// console.log(array1.groupBy(item => item.name));


const array2 = [{ name: "Suriya" }, { name: "Suriya" }, { name: "Laksh" }];

function groupArray(arr) {
    const obj = {}
    arr.forEach(item => {
        const key = Object.keys(item)[0];
        const value = item[key];
        if (!obj[value]) {
            obj[value] = [];
        }
        obj[value].push(item);
    });
    console.log(obj)
}

groupArray(array2);