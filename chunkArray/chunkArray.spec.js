const { chunkArray } = require('./chunkArray');

describe('chunkArray', () => {
    it('should divide array into subarrays of given chunk size', () => {
        const arr1 = [1, 2, 3, 3, 4, 5, 6, 7];
        expect(chunkArray(arr1, 3)).toEqual([
            [1, 2, 3],
            [3, 4, 5],
            [6, 7],
        ]);

        const arr2 = [1, 2, 3, 5, 6, 7];
        expect(chunkArray(arr2, 1)).toEqual([[1], [2], [3], [5], [6], [7]]);
    });

    it('should handle empty array', () => {
        const arr = [];
        expect(chunkArray(arr, 2)).toEqual([]);
    });

    it('should handle chunk size greater than array length', () => {
        const arr = [1, 2, 3];
        expect(chunkArray(arr, 5)).toEqual([[1, 2, 3]]);
    });

    it('should handle array with length divisible by chunk size', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        expect(chunkArray(arr, 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
    });
});
