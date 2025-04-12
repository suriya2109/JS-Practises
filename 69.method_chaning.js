class calculator {
    constructor(value) {
        return this.result = value;
    }

    getAdd(value) {
        this.result += value;
        return this;
    }
    getSub(value) {
        this.result -= value;
        return this;
    }
    getMul(value) {
        this.result *= value;
        return this;
    }
    getSub(value) {
        this.result /= value;
        return this;
    }
    getPow(value) {
        this.result += Math.pow(this.result, value);
        return this;
    }

    getResult(value) {
        return this.result;
    }
}


// const calc1 = new calculator(10).getAdd(3).getMul(4);
// console.log(calc1.getResult());


const calc2 = new calculator(20).getSub(3).getSub(4);
console.log(calc2.getResult())