const db = require("../db");

const GetTotal = () => {

	return new Promise((resolve, reject) => {

		db.query(`SELECT * FROM Rounds ORDER BY roundID DESC;`, async (error, rows, fields) => {
			if (error) {
				console.log(error);
				reject({"message":"Error"});
				return;
			}
			
			console.log('GOT TOTAL');
			resolve({"total": rows[0].total});
		});
	});
}

module.exports = GetTotal;