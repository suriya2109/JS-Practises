// Shallow Copy 

const original = {
    name: "suriya",
    address: {
        city: "chennai"
    }
}

// const ShallowCopy = Object.assign({}, original);

// const ShallowCopy2 = {...original };
// ShallowCopy2.address.city = "madurai";

// console.log(original.address.city);
// console.log(ShallowCopy2.address.city);

const deepcopy = JSON.parse(JSON.stringify(original));

const deepResult = deepcopy.address.city = "madurai";
console.log(deepResult)
console.log(original.address.city);


// Describe the difference between Shallow and Deep copying 
// 1) Shallow copying 
// In the shallow copy of an object, the main properties are copied, but any nested objects or arrays are still linked to the original.
// Deep copying 
// With a deep copy, every part of the object, including all nested objects or arrays, is fully copied, ensuring the modifications to the copy doesn't affect the original.