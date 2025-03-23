function cancellable(fn, args, t) {

    let startTime = Date.now();
    const result = fn(...args);

    console.log(`Time: 0ms, Returned:`, result);
    // Set an interval to repeatedly call the function
    const intervalId = setInterval(() => {
        const result = fn(...args);
        console.log(`Time: ${Date.now()-startTime}ms, Returned:`, result)
    }, t);

    // Return the cancel function
    return () => clearInterval(intervalId);
}

const fn = (x) => {
    return x * 2;
};
const args = [4];
const t = 35;
const cancelTimeMs = 200;

const cancelFn = cancellable(fn, args, t);
setTimeout(cancelFn, cancelTimeMs);