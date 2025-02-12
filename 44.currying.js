function double(a) {
    return function(b) {
        return a * b;
    }
}

const double2 = double(2);
console.log(double2(3));