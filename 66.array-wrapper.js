class arrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }
    valueOf() {
        return this.nums.reduce((sum, val) => sum + val, 0)
    }

    toString() {
        const resultStr = JSON.stringify(this.nums);
        return resultStr.toString();
        // return `[${this.nums.join(",")}]`;
    }
}

const obj1 = new arrayWrapper([1, 2, 3]);
const obj2 = new arrayWrapper([5, 8, 9, 3]);

console.log(obj1 + obj2);
console.log(String(obj1));