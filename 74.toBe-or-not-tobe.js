var expect = function(val) {
    return {
        toBe: function(expectedVal) {
            if (val !== expectedVal) {
                throw new Error("Not Equal");
            }
            return true;
        },
        notToBe: function(expectedVal) {
            if (val === expectedVal) {
                throw new Error("Equal");
            }
            return true;
        }
    };
};

try {
    console.log(expect(5).toBe(5)); // true
} catch (error) {
    console.error(error.message);
}

try {
    console.log(expect(5).notToBe(10)); // true
} catch (error) {
    console.error(error.message);
}

try {
    console.log(expect(5).toBe(10)); // Throws "Not Equal"
} catch (error) {
    console.error(error.message);
}

try {
    console.log(expect(5).notToBe(5)); // Throws "Equal"
} catch (error) {
    console.error(error.message);
}