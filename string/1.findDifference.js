function findDifference(s, t) {

    let sOne = s.split('').sort();
    let tOne = t.split('').sort();

    i = 0;
    while (i < sOne.length) {
        if (sOne[i] !== tOne[i]) {
            return tOne[i];
        }
        i++;
    }
    return tOne[tOne.length - 1];
}

let s = "abcd";
let t = "abucd";

console.log(findDifference(s, t));

// In short: XOR is a neat way to“ cancel duplicates” in bit - level math.