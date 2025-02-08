const button = document.querySelector("button");

function observer1() {
    console.log("Observer1 got notified!")
}

function observer2() {
    console.log("Observer2 got notified!")
}

button.addEventListener("click", observer1);
button.addEventListener("click", observer2);