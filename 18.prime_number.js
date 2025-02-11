function isPrime(number) {
    if (number < 2) return false; // Handle 0, 1, and negative numbers

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(0)); // false (Correct Output)