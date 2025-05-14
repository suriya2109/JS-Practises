var debounce = function(fn, t) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args)
        }, t);
    }
}

let start = Date.now();

function funlog(...args) {
    let elapsed = Date.now() - start;
    console.log(`${elapsed}ms:`, args);
}

var dlong = debounce(funlog, 50);

setTimeout(() => dlong(1), 75);
setTimeout(() => dlong(2), 100);