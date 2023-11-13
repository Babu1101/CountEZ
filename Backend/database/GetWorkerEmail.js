const db = require("../db");

const GetWorkerEmail = ({ userID }) => {

	return new Promise((resolve, reject) => {
		db.query(`SELECT * FROM Users WHERE userID=?;`, [userID], async (error, rows, fields) => {
			if (error) {
				console.log(error);
				reject({"message":"Error"});
				return;
			}

			if(rows.length == 0){
				console.log("GETTING USER THAT DOES NOT EXIST");
				reject({"message":"This user does not exist"});
				return;
			}

			email = rows[0].email;
			resolve(email);
		});
	});
}

module.exports = GetWorkerEmail;
