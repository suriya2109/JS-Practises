function cook(ing1, ing2, ing3) {
    console.log(`${this.name} is having a meal with ${ing1}, ${ing2}`);
}
const name = { name: "suriya" };

cook.call(name, "rice", "beans");
cook.apply(name, ["rice", "beans"]);

const cookAdam = cook.bind(name, "rice", "corets");

cookAdam();

// What is the difference between call, apply, and bind? 
// 1)Call 
// Invokes the function immediately, with this set to thisArg, and accepts arguments one by one.
// 2)Apply 
// Invokes the function immediately, with this set to thisArg, but takes arguments as an array.
// 3)Bind 
// Returns a new function with this set to thisArg, and any preset arguments, but doesn't invoke it immediately.

// call 
// Runs the function immediately, passing each argument separately. 
// apply 
// Runs the function immediately, passing arguments as an array.
// bind 
// Creates a new function with preset this and arguments, which you can call later.

// Event Loop 
// A technique that allows you to manage events for multiple elements more efficiently by using a single event.
// listener on a common parent element rather than on each individual child element.