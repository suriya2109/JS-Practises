var romanToInt = function(s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let n = s.length;

    for (let i = 0; i < n; i++) {
        let curr = map[s[i]];
        let next = map[s[i + 1]] || 0; // handle undefined safely

        if (curr < next) {
            total -= curr;
        } else {
            total += curr;
        }
    }

    return total;
};

let str = "MCMXCIV"
console.log(romanToInt(str));