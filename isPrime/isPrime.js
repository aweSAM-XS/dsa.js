const isPrime = (n) => {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
};

console.log(isPrime(41));

module.exports = isPrime

//O(sqrt(n)) because we iterate up to the square root of n to check if n is divisible by any number. 