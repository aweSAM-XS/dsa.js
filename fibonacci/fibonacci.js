const fibonacci = (n) => {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }

    const sequence = [0, 1];
    let a = 0;
    let b = 1;

    for (let i = 3; i <= n; i++) {
        const c = a + b;
        sequence.push(c);
        a = b;
        b = c;
    }

    return sequence;
};

console.log(fibonacci(20));

module.exports = fibonacci;

// O(n) because we iterate n times in the for loop to generate the Fibonacci sequence.
