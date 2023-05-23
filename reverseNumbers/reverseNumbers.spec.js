const { reverseNumbers } = require('./reverseNumbers');

describe('reverseNumbers', () => {
    it('should be a function', () => {
        expect(typeof reverseNumbers).toEqual('function');
    });

    it('should reverse a positive number correctly', () => {
        expect(reverseNumbers(12345)).toBe(54321);
    });

    it('should reverse a negative number correctly', () => {
        expect(reverseNumbers(-9876)).toBe(-6789);
    });

    it('should return 0 if the input is 0', () => {
        expect(reverseNumbers(0)).toBe(0);
    });

    it('should return a number', () => {
        expect(typeof reverseNumbers(25)).toEqual('number');
    });
});
