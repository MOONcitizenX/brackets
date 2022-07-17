module.exports = function check(str, bracketsConfig) {
	const stack = [];
	const newBrackets = JSON.parse(JSON.stringify(bracketsConfig)).map((el) =>
		el.reverse()
	);
	const map = Object.fromEntries(newBrackets);

	for (let i = 0; i < str.length; i++) {
		const current = str[i];

		if (
			Object.keys(map).includes(current) &&
			stack[stack.length - 1] === map[current]
		) {
			stack.pop();
		} else {
			stack.push(current);
		}
	}
	return stack.length === 0;
};
