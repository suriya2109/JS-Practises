class tempeature {
    constructor(celsious) {
        this.celsious = celsious;
    }

    get frenheit() {
        return this.celsious * 1.8 + 32;
    }

    set ferenheit(value) {
        return this.celsious = (value - 32) / 1.8;
    }

    static fromFrenheit(value) {
        return new tempeature((value - 32) / 1.8);
    }
}

let tem = new tempeature(22);
console.log(tem.frenheit);

tem.frenheit = 86;
console.log(tem.celsious);