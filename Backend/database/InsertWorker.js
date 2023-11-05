const db = require("../db");
const bcrypt = require('bcrypt');

const InsertWorker = async (body, generatedPassword) => {
	const hashedPassword = await bcrypt.hash(generatedPassword, 13);

	return new Promise((resolve, reject) => {

		db.query(`INSERT INTO Users (email, firstName, lastName, password) VALUES (?, ?, ?, ?);`, 
		[body.email, body.firstName, body.lastName, hashedPassword], async (error, rows, fields) => {
			if (error) {
				console.log(error);
				reject({"message":"Error"});
				return;
			}
			
			console.log('INSERT NEW WORKER -', body.email);
			resolve();
		});
	});
}

module.exports = InsertWorker;