const reverseNumbers = (num) => {
	const isNegative = num < 0;
	const numString = Math.abs(num).toString();
	const reversedString = numString.split('').reverse().join('');
	const reversedNum = +(reversedString);
  
	return isNegative ? -reversedNum : reversedNum;
};
  
module.exports = {reverseNumbers}