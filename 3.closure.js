function sum(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return function(e) {
                    return a + b + c + d + e;
                }
            }
        }
    }
}
let total = sum(2)(3)(4)(5)(6);

console.log(total)