const db = require("../db");

const DeleteWorker = ({ userID }, email) => {

	return new Promise((resolve, reject) => {
		db.query(`DELETE FROM Users WHERE userID=?;`, [userID], async (error, rows, fields) => {
			if (error) {
				console.log(error);
				reject({"message":"Error"});
				return;
			}
			
			console.log('DELETE WORKER -', email);
			resolve();
		});
	});
}

module.exports = DeleteWorker;