const fizzbuzz = require('./fizzBuzz');

describe('fizzBuzz', () => {
    let outputData = [];
    const storeLog = (inputs) => outputData.push(inputs);

    beforeEach(() => {
        outputData = [];
        console.log = jest.fn(storeLog);
    });

    afterEach(() => {
        console.log.mockRestore();
    });

    it('should log the correct output for numbers not divisible by 3 or 5', () => {
        fizzbuzz(7);
        expect(outputData).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz', 7]);
    });

    it('should log "fizz" for numbers divisible by 3', () => {
        fizzbuzz(9);
        expect(outputData).toEqual([
            1,
            2,
            'fizz',
            4,
            'buzz',
            'fizz',
            7,
            8,
            'fizz',
        ]);
    });

    it('should log "buzz" for numbers divisible by 5', () => {
        fizzbuzz(20);
        expect(outputData).toEqual([
            1,
            2,
            'fizz',
            4,
            'buzz',
            'fizz',
            7,
            8,
            'fizz',
            'buzz',
            11,
            'fizz',
            13,
            14,
            'fizzbuzz',
            16,
            17,
            'fizz',
            19,
            'buzz',
        ]);
    });

    it('should log "fizzbuzz" for numbers divisible by both 3 and 5', () => {
        fizzbuzz(45);
        expect(outputData).toEqual([
            1,
            2,
            'fizz',
            4,
            'buzz',
            'fizz',
            7,
            8,
            'fizz',
            'buzz',
            11,
            'fizz',
            13,
            14,
            'fizzbuzz',
            16,
            17,
            'fizz',
            19,
            'buzz',
            'fizz',
            22,
            23,
            'fizz',
            'buzz',
            26,
            'fizz',
            28,
            29,
            'fizzbuzz',
            31,
            32,
            'fizz',
            34,
            'buzz',
            'fizz',
            37,
            38,
            'fizz',
            'buzz',
            41,
            'fizz',
            43,
            44,
            'fizzbuzz',
        ]);
    });
});
