// Waekmap

// let weakmap = new WeakMap();
// let obj = { name: "suriya" };

// weakmap.set(obj, "maddy");
// // obj = null;
// console.log(weakmap.get(obj));

// Waekset
let weakset = new WeakSet();
let obj = { name: "suriya" };

weakset.add(obj, "maddy");
obj = null;
console.log(weakset.has(obj));