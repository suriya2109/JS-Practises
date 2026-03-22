class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(other) {
        return new Vec(this.x + other.x, this.y + other.y);
    }

    minus(other) {
        return new Vec(this.x - other.x, this.y - other.y);
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

let v1 = new Vec(1, 2);
let v2 = new Vec(2, 3);

console.log(v1.plus(v2));
// → Vec { x: 3, y: 5 }

console.log(v1.minus(v2));
// → Vec { x: -1, y: -1 }

console.log(new Vec(3, 4).length);
// → 5