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