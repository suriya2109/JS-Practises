console.log("Start");

setTimeout(() => {
    console.log("setTimeout Callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise Resolved");
});

console.log("End");


// Event Loop?
// The event loop is an important concept in JavaScript that enables asynchronous programming by handling tasks efficiently. Since JavaScript is single-threaded, it uses the event loop to manage the execution of multiple tasks without blocking the main thread.