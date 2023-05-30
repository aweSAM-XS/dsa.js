const fibonacci = require('./fibonacci');

describe('Fibonacci Sequence', () => {
	it('should return an empty array when n is 0', () => {
	  expect(fibonacci(0)).toEqual([]);
	});
  
	it('should return [0] when n is 1', () => {
	  expect(fibonacci(1)).toEqual([0]);
	});
  
	it('should return [0, 1] when n is 2', () => {
	  expect(fibonacci(2)).toEqual([0, 1]);
	});
  
	it('should return the correct Fibonacci sequence for n greater than 2', () => {
	  expect(fibonacci(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
	});
  });