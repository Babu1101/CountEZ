const GeneratePassword = async () => {
	let generatedPassword = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let counter = 0;
	while (counter < 8) {
		generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
		counter += 1;
	}

	return generatedPassword;
}

module.exports = GeneratePassword;