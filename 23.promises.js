const myPromises = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = Math.floor(Math.random() * 10);
        if (result < 5) {
            resolve(`success! the random number: ${result}`);
        } else {
            reject(`Error! Random number: ${result}`);
        }
    }, 1000);
});
myPromises
    .then((result) => {
        console.log(result);
    })
    .catch((result) => {
        console.log(result);
    });