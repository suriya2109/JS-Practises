function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}

function logMessage(msg) {
    console.log(msg, new Date().toISOString());
}

const throttledLog = throttle(logMessage, 2000);

// simulate repeated calls
setInterval(() => {
    throttledLog('Called!');
}, 500);

// 📌 Tip: Throttle vs Debounce
// Throttle: Executes the function at regular intervals while the event is being triggered.

// Debounce: Executes the function only after the event has stopped firing for a specified delay.