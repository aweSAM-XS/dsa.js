function capitaliseWords(str) {
    if (typeof str !== 'string') {
        return "Only works with strings"
    }
	const words = str.split(' ');
    const capitalArray = words.map((word) => {
        const capitalised = word.charAt(0).toUpperCase() + word.slice(1);
        return capitalised;
    });

    const result = capitalArray.join(' ');

    return result;
}

console.log(capitaliseWords(123));
module.exports = capitaliseWords
