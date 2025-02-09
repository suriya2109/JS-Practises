// const x1 = new Promise((res, rej) => {
//     setTimeout(res, 500, 'one');
// });
// const x2 = new Promise((res, rej) => {
//     setTimeout(res, 100, 'two');
// });

// Promise.all([x1, x2]).then(res => {
//     console.log(res);
// });

// Promise.race([x1, x2]).then(res => {
//     console.log(res);
// })
// const data = { name: "suriya", age: 24 };

function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    })
};

myPromise().then(
    data => {
        console.log("Data", data);
    }).catch(err => {
    console.log("Error", err);
})

// Explain the concept of Promises in JavaScript. 
// Promises handle asynchronous tasks in JavaScript by providing a more readable and structured approach than callbacks for handling outputs 
// Pending 
// Fulfilled 
// Rejected