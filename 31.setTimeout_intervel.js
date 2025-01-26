let timeId = setInterval(() => {
    console.log("My name is Suriya")
}, 2000);
//  It used to excute the function once after a specified delay.
setTimeout(() => {
    clearInterval(timeId);
}, 4000);
//  It used to excute the function repeatedly at specified intervals.