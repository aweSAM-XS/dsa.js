const isPrime = require('./isPrime');

describe('Prime Number Check', () => {
	it('should return false for numbers less than or equal to 1', () => {
	  expect(isPrime(0)).toBe(false);
	  expect(isPrime(1)).toBe(false);
	});
  
	it('should return true for prime numbers', () => {
	  expect(isPrime(2)).toBe(true);
	  expect(isPrime(3)).toBe(true);
	  expect(isPrime(5)).toBe(true);
	  expect(isPrime(7)).toBe(true);
	  expect(isPrime(11)).toBe(true);
	});
  
	it('should return false for non-prime numbers', () => {
	  expect(isPrime(4)).toBe(false);
	  expect(isPrime(6)).toBe(false);
	  expect(isPrime(8)).toBe(false);
	  expect(isPrime(9)).toBe(false);
	  expect(isPrime(10)).toBe(false);
	});
  });