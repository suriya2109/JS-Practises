// 🧾 Simple definition:

// 👉 “instanceof checks whether an object belongs to a class or its parent class.”
// Dog → Animal
// 👉 Dog is also an Animal ✅
// 👉 But Animal is not a Dog ❌

console.log(
    new LengthList(1, null) instanceof LengthList);
// → true
console.log(new LengthList(2, null) instanceof List);
// → true
console.log(new List(3, null) instanceof LengthList);
// → false
console.log([1] instanceof Array);
// → true