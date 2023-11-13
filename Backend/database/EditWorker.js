const db = require("../db");

const EditWorker = ({ userID, firstName, lastName, isActive }) => {

	return new Promise((resolve, reject) => {

		db.query(`UPDATE Users SET firstName=?, lastName=?, isActive=? WHERE userID=?;`, [firstName, lastName, isActive, userID], async (error, rows, fields) => {
			if (error) {
				console.log(error);
				reject({"message":"Error"});
				return;
			}
			
			console.log('EDIT WORKER -', userID);
			resolve();
		});
	});
}

module.exports = EditWorker;