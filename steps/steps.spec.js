const steps = require('./steps');

const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('steps', () => {
    afterEach(() => {
        consoleSpy.mockReset();
    });

    afterAll(() => {
        consoleSpy.mockRestore();
    });

    it('prints steps shape with 3 levels', () => {
        steps(3);
        expect(consoleSpy.mock.calls.length).toBe(3);
        expect(consoleSpy.mock.calls[0][0]).toBe('#  ');
        expect(consoleSpy.mock.calls[1][0]).toBe('## ');
        expect(consoleSpy.mock.calls[2][0]).toBe('###');
    });

    it('prints steps shape with 5 levels', () => {
        steps(5);
        expect(consoleSpy.mock.calls.length).toBe(5);
        expect(consoleSpy.mock.calls[0][0]).toBe('#    ');
        expect(consoleSpy.mock.calls[1][0]).toBe('##   ');
        expect(consoleSpy.mock.calls[2][0]).toBe('###  ');
        expect(consoleSpy.mock.calls[3][0]).toBe('#### ');
        expect(consoleSpy.mock.calls[4][0]).toBe('#####');
    });

    it('does not take a string input', () => {
        steps('sam');
        expect(consoleSpy).toHaveBeenCalledWith('provide a number');
    });

    it('does not take a string input', () => {
        steps(-3);
        expect(consoleSpy).toHaveBeenCalledWith('provide a positive number');
    });
});
