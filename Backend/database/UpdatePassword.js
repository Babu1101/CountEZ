const db = require("../db");
const bcrypt = require('bcrypt');

const UpdatePassword = async (email, generatedPassword) => {
	const hashedPassword = await bcrypt.hash(generatedPassword, 13);

	return new Promise((resolve, reject) => {
		db.query('SELECT * from Users where email =?', [email], async(error, rows, fields) => {
			if (error) {
					console.log(error);
					reject({ "message": "Error" });
					return;
			}

			if(rows.length == 0){
				console.log("This user email doesn't exist.");
				reject({ "message": "This user email doesn't exist." });
				return;
			}

			db.query('UPDATE Users SET password=? WHERE email=?',
			[hashedPassword, email], async (error, rows, fields) => {

				if (error) {
						console.log(error);
						reject({ "message": "Error" });
						return;
				}

				console.log('Update Worker Password -', email);
				resolve();
			});
		});
	});
}

module.exports = UpdatePassword;