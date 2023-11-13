const db = require("../db");

const CheckWorkerExists = ({ email }) => {

	return new Promise((resolve, reject) => {
		
		db.query(`SELECT * FROM Users WHERE email=?`, [email], async (error, rows, fields) => {
			if (error) {
				console.log(error);
				reject({"message":"Error"});
				return;
			}

			if(rows.length != 0){
				console.log("");
				reject({"message":"This email is already in use."});
				return;
			}
			
			resolve();
		});
	});
}

module.exports = CheckWorkerExists;