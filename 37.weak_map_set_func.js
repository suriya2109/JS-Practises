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
// obj = null;
console.log(weakset.has(obj));

// What are Weak maps and Weak sets in JavaScript? 
// Both WeakMap and WeakSet are non-iterable, have no size property, and are ideal for temporary data storage and memory-efficient management of objects.


// ***uses 
// its again used for fire storing temporary files.