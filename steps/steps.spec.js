const steps = require('./steps');

describe('steps', () => {
    const log = console.log;
    beforeEach(() => {
        console.log = jest.fn();
    });
    afterEach(() => {
        console.log = log;
    });

    it('prints steps shape with 3 levels', () => {
        steps(3);
        expect(console.log.mock.calls.length).toBe(3);
        expect(console.log.mock.calls[0][0]).toBe('#  ');
        expect(console.log.mock.calls[1][0]).toBe('## ');
        expect(console.log.mock.calls[2][0]).toBe('###');
    });

    it('prints steps shape with 5 levels', () => {
        steps(5);
        expect(console.log.mock.calls.length).toBe(5);
        expect(console.log.mock.calls[0][0]).toBe('#    ');
        expect(console.log.mock.calls[1][0]).toBe('##   ');
        expect(console.log.mock.calls[2][0]).toBe('###  ');
        expect(console.log.mock.calls[3][0]).toBe('#### ');
        expect(console.log.mock.calls[4][0]).toBe('#####');
    });

    it('does not take a string input', () => {
        steps('sam');
        expect(console.log).toHaveBeenCalledWith('provide a number');
    });

    it('does not take a string input', () => {
        steps(-3);
        expect(console.log).toHaveBeenCalledWith('provide a positive number');
    });
});
