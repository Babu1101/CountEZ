const db = require("../db");

const GetWorkers = () => {

	return new Promise((resolve, reject) => {

		db.query(`SELECT * FROM Users WHERE isAdmin=0;`, async (error, rows, fields) => {
			if (error) {
				console.log(error);
				reject({"message":"Error"});
				return;
			}

			const cleanedRows = rows.map((row) => {
				return {
					userID: row.userID,
					email: row.email,
					firstName: row.firstName,
					lastName: row.lastName,
					isActive: row.isActive
				}
			});
			
			console.log('GOT ALL WORKERS');
			resolve(cleanedRows);
		});
	});
}

module.exports = GetWorkers;