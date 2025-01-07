const x1 = new Promise((res, rej) => {
    setTimeout(res, 500, 'one');
});
const x2 = new Promise((res, rej) => {
    setTimeout(res, 100, 'two');
});

Promise.all([x1, x2]).then(res => {
    console.log(res);
});

Promise.race([x1, x2]).then(res => {
    console.log(res);
})