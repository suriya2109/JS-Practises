/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, t)
    }
};

let start = Date.now();

function funcLog(...args) {
    console.log(`${Date.now() - start}ms:`, args);
}

const dlog = debounce(funcLog, 50);
setTimeout(() => dlog(1), 50);
setTimeout(() => dlog(2), 75);