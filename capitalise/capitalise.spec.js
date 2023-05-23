const capitaliseWords = require('./capitalise');

describe('capitaliseWords', () => {
    it('should only accept strings', () => {
        const input = 123;
        const expected = 'Only works with strings';
        const result = capitaliseWords(input);
        expect(result).toBe(expected);
    });

    it('should capitalize the first letter of each word in a sentence', () => {
        const input = 'hello there';
        const expected = 'Hello There';
        const result = capitaliseWords(input);
        expect(result).toBe(expected);
    });

    it('should capitalize the first letter of each word in a single word sentence', () => {
        const input = 'hi';
        const expected = 'Hi';
        const result = capitaliseWords(input);
        expect(result).toBe(expected);
    });

    it('should capitalize the first letter of each word in a sentence with multiple words', () => {
        const input = 'this is a test sentence';
        const expected = 'This Is A Test Sentence';
        const result = capitaliseWords(input);
        expect(result).toBe(expected);
    });
});
