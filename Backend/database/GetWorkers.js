const db = require("../db");

const GetWorkers = () => {

	return new Promise((resolve, reject) => {

		db.query(`SELECT * FROM Users WHERE isActive=1 AND isAdmin=0;`, async (error, rows, fields) => {
			if (error) {
				console.log(error);
				reject({"message":"Error"});
				return;
			}

			const cleanedRows = rows.map((row) => {
				return {
					userID: row.userID,
					emaiL: row.email,
					firstname: row.firstName,
					lastname: row.lastName,
				}
			});
			
			console.log('GOT ALL WORKERS');
			resolve(cleanedRows);
		});
	});
}

module.exports = GetWorkers;