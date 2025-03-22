function cancelable(fn, arg, t) {
    let timerId = setTimeout(() => {
        console.log(fn(...arg), t)
    }, t);

    return function cancelFn() {
        console.log("cancel");
        clearTimeout(timerId)
    }
};

const fn = (x) => x * 5;
const arg = [10];
const t = 2000;

const cancelFn = cancelable(fn, arg, t);
setTimeout(cancelFn, 1000)