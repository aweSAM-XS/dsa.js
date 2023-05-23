const capitaliseWords = require('./capitalise');

describe('capitaliseWords', () => {
    it('should only accept strings', () => {
        expect(capitaliseWords(123)).toBe('Only works with strings');
    });

    it('should capitalize the first letter of each word in a sentence', () => {
        expect(capitaliseWords('hello there')).toBe('Hello There');
    });

    it('should capitalize the first letter of each word in a single word sentence', () => {
        expect(capitaliseWords('hi')).toBe('Hi');
    });

    it('should capitalize the first letter of each word in a sentence with multiple words', () => {
        expect(capitaliseWords('this is a test sentence')).toBe('This Is A Test Sentence');
    });
});
