const mostCommon = (value) => {
	let valueArray = value.toString().split('');
	let valueSet = new Set(valueArray);
	let maxCount = 0;
	let common = [];
  
	for (let value of valueSet) {
	  let count = valueArray.reduce((x, val) => {
		return x + (value.toLowerCase() === val.toLowerCase());
	  }, 0);
  
	  if (count > maxCount) {
		maxCount = count;
		common = [value.toLowerCase()];
	  } else if (count === maxCount && !common.includes(value.toLowerCase())) {
		common.push(value.toLowerCase());
	  }
	}
  
	return common;
};
  
module.exports = mostCommon  