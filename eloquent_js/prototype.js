// Key points:

// ✔ Prototype is an object
// ✔ Used to share properties/methods
// ✔ Helps in memory optimization (no duplication)
// ✔ Enables inheritance

// So this inheritance is achieved through the prototype chain. When we create an object using a constructor function, it has access to the properties and methods defined on the constructor's prototype. This allows us to share functionality across all instances without having to duplicate code for each instance.

function person(name) {
    this.name = name;
}

person.prototype.sayHi = function() {
    console.log("Hi, I'm " + this.name);
}

const user = new person("Suriya");
console.log(user.name); // Output: Suriya