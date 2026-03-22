// “Polymorphism means writing code that works with different objects as long as they follow the expected interface.”
// 🔥 Core message of the paragraph:

// 👉 JavaScript focuses on structure, not type

// ✔ If an object:

// has toString() → works with String()
// has length + indexes → works like array

// ➡️ It doesn’t matter if it's actually an array or not

Array.prototype.forEach.call({
    length: 2,
    0: "A",
    1: "B"
}, elt => console.log(elt));

// 🧠 Easy examples:
// One button → different devices
// TV → changes channel
// AC → changes temperature

// 👉 Same button, different result → polymorphism