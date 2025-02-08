function* infiniteSequence() {
    let num = 1;
    while (true) {
        yield num;
        num++;
    }
}

const seq = infiniteSequence();
console.log(seq.next().value);
console.log(seq.next().value);

// Define =>
// A generator function is a special type of function that can pause its excution and resume it later.

// Why Use Generators?
// Generators allow lazy evaluation, meaning values are produced on demand.
// They can be used for infinite sequences without running out of memory.
// They are useful in scenarios like iterators, asynchronous programming, and handling large datasets.