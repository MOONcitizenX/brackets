module.exports = function check(str, bracketsConfig) {
	const arr = str.split('');
	for (let _ = 0; _ < str.length; _++) {
		for (let i = 0; i < bracketsConfig.length; i++) {
			for (let j = 0; j < arr.length; j++) {
				if (
					arr[j] === bracketsConfig[i][0] &&
					arr[j + 1] === bracketsConfig[i][1]
				) {
					arr.splice(j, 2);
				}
			}
		}
	}
	return arr.length === 0;
};
