class Calculator {
    constructor(value) {
        this.result = value;
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }

    power(value) {
        this.result = Math.pow(this.result, value);
        return this;
    }

    getResult() {
        return this.result;
    }
}

// Example Usage
const calc = new Calculator(10)
    .add(5)
    .subtract(3)
const calc2 = new Calculator(2)
    .multiply(5)
    .power(2);

// const calc3 = new Calculator(20)
// .divide(0)

console.log(calc.getResult());
console.log(calc2.getResult());
// console.log(calc3.getResult());