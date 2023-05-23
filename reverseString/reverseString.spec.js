const reverseString = require('./reverseString');

describe('reverseString', () => {
    it('should be a function', () => {
        expect(typeof reverseString).toEqual('function');
    });

    it('should return an empty string if given an empty string', () => {
        expect(reverseString('')).toEqual('');
	});
	
	it('should reverse a string', () => {
		expect(reverseString('samuel')).toEqual('leumas')
	})

	it('should reverse string with spaces', () => {
		expect(reverseString('Hello World')).toEqual('dlroW olleH')
	})
});
