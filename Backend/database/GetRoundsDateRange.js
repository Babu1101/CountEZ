const db = require("../db");

const GetRoundsDateRange = () => {

	return new Promise((resolve, reject) => {

		db.query(`
			(SELECT * FROM Rounds ORDER BY roundID ASC LIMIT 1)
			UNION
			(SELECT * FROM Rounds ORDER BY roundID DESC LIMIT 1);`, async (error, rows, fields) => {
			if (error) {
				console.log(error);
				reject({"message":"Error"});
				return;
			}
			
			console.log('GET ROUNDS DATE RANGE');
			resolve({
				status: true,
				earliest: rows[0].date.toISOString().slice(0, 10),
				latest: rows[1].date.toISOString().slice(0, 10),
			});
		});
	});
}

module.exports = GetRoundsDateRange;