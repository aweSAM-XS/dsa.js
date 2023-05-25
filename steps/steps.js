const steps = (n) => {
	if (typeof n !== 'number') {
		console.log('provide a number')
		return
	}
	if (Math.sign(n) == -1) {
		console.log('provide a positive number');
		return
	}
	for (let i = 0; i < n; i++) {
		let step = '';
		for (let j = 0; j < n; j++) {
		  if (j <= i) {
			step += '#';
		  }
		  else {
			step += ' ';
		  }
		}
		console.log(step);
	  }
};

module.exports = steps

// steps(3)
// steps(5)
// steps(9)
// steps(-3)
// steps('sam')