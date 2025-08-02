class EventEmitter {
    constructor() {
        this.events = {};
    }

    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);

        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(fn => fn !== callback);
            }
        };
    }

    emit(eventName, args = []) {
        if (!this.events[eventName]) return [];

        return this.events[eventName].map(cb => cb(...args));
    }
}

// ✅ Now it works
const emitter = new EventEmitter();

function onLogin(data) {
    console.log("User logged in:", data.username);
}

emitter.subscribe("userLoggedIn", onLogin);
emitter.emit("userLoggedIn", [{ username: "suriya" }]);
// Output: User logged in: suriya