module.exports = () => {
	let output = {
		choices: [],
		names: []
	};

	for (let x = 1; x <= 4; x++) {
		let rank = Math.floor(Math.random() * 99.99) + 1;
		while (output.choices.includes(rank)) {
			rank = Math.floor(Math.random() * 99.99) + 1;
		}
		output.choices.push(rank);
	};

	output.answer = output.choices[Math.floor(Math.random() * 3.99)];

	return output;
}