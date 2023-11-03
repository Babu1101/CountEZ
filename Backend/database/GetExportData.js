const db = require("../db");

const GetExportData = ({ email }) => {

	return new Promise((resolve, reject) => {

		db.query(`
			SELECT Rounds.*, Users.firstName AS firstName, Users.lastName AS lastName
			FROM Rounds
			INNER JOIN Users ON Rounds.userID = Users.userID;`, async (error, rows) => {

			if (error) {
				console.log(error);
				reject({"message":"Error"});
				return;
			}

			const cleanedRows = rows.map((row) => {
				return {
					time: null, // THIS IS THE START TIME THAT THEY SHOULD BE DOING THE ROUNDS
					name: `${row.firstName} ${row.lastName}`,
					startTime : row.startTime.slice(0, 5),
					endTime: row.endTime.slice(0, 5),
					activities: row.activities,
					gameRoom: row.gameRoom,
					secondFloor: row.secondFloor,
					collabRooms: row.collabRooms,
					prayerRoom: row.prayerRoom,
					mediaRoom: row.mediaRoom,
					commuter: row.commuter,
					commons: row.commons,
					hive: row.hive,
					breakout: row.breakout,
					greatRoom: row.greatRoom,
					mail: row.mail,
					hallways: row.hallways,
					other: row.other,
					total: row.total,
					date: row.date.toISOString().slice(0, 10)
				};
			});
			
			console.log('EXPORT DATA -', email);			
			resolve(cleanedRows);
		});
	});
}

module.exports = GetExportData;