async function fetchData() {
    try {
        const respone = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await respone.json();
        console.log("The API got fetched.", data);
    } catch (err) {
        console.log("Error:", err)
    }
}

fetchData();

// What is the difference between a promise and an async/await function? 
// 1)async/await 
// async/await is a cleaner, more readable way to handle Promises.
// 2)promise 
// promises are the underlying mechanism.

// Explaination about aysyc and await ?
// What is the use of async and await in JavaScript? 
// async, 
// Declaring a function with async makes it return a promise. 
// await,
// It pauses the execution of the code until the promise it's waiting for is resolved, then returns the resolved value.