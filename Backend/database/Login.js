const db = require("../db");
const bcrypt = require('bcrypt');

const Login = ({ email, password }) => {

	return new Promise((resolve, reject) => {

		db.query('SELECT * FROM Users WHERE email=?', [email], async (error, rows, fields) => {
			if (error) {
				console.log(error);
				reject({"message":"Error"});
				return;
			}
	
			if (rows.length == 0) {
				console.log("USER DOES NOT EXIST -", email);
				resolve({
					status: "invalid",
					user: {}
				})
				return;
			}

			const data = rows[0];

			if (!data.isActive) {
				console.log("THIS USER IS INACTIVE -", email);
				resolve({
					status: "inactive",
					user: {}
				});
				return;
			}
	
			if (!await bcrypt.compare(password, data.password)) {
				console.log("WRONG PASSWORD -", email);
				resolve({
					status: "invalid",
					user: {}
				});
				return;
			}

			console.log("LOGGED IN -", email);
			const status = data.isAdmin ? "admin" : "worker";
			resolve({
				status: status,
				user: {
					userId: data.userID,
					firstname: data.firstName,
					lastname: data.lastName,
					email: data.email,
					isAdmin: data.isAdmin,
				}
			});
		});
	});
}

module.exports = Login;