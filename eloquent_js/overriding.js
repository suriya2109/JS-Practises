// 🧾 Simple one-line definition (interview):

// 👉 “When an object has a property with the same name as its prototype, the object’s property overrides the prototype property.”

class Rabbit {
    constructor(type) {
        this.type = type;
    }
}

const killerRabbit = new Rabbit("killer");

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// → small 
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody 
console.log((new Rabbit("basic")).teeth);
// → small 
console.log(Rabbit.prototype.teeth); // → smallnode