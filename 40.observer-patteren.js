const button = document.querySelector("button");

function observer1() {
    console.log("Observer1 got notified!")
}

function observer2() {
    console.log("Observer2 got notified!")
}

button.addEventListener("click", observer1);
button.addEventListener("click", observer2);

// Explain the Observer pattern and how it relates to JavaScript 
// The Observer Pattern is a design pattern in which an object (called the subject) maintains a list of its dependents (called observers) and notifies them of any changes, typically through a broadcast mechanism.