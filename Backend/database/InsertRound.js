const db = require("../db");

const InsertRound = ({ userID, data, startTime, endTime, date }) => {

	return new Promise((resolve, reject) => {

		const { 
			activities, gameRoom, secondFloor, collabRooms, 
			prayerRoom, mediaRoom, commuter, commons, hive, 
			breakout, greatRoom, mail, hallways, other } = data;
		
		db.query(`INSERT INTO Rounds 
			(userID, activities, gameRoom, secondFloor, collabRooms, prayerRoom, mediaRoom, commuter, commons, 
				hive, breakout, greatRoom, mail, hallways, other, startTime, endTime, date) 
			VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`, 
			[
				userID, activities, gameRoom, secondFloor, collabRooms, 
				prayerRoom, mediaRoom, commuter, commons, hive, 
				breakout, greatRoom, mail, hallways, other, startTime, endTime, date
			], 
			async (error, rows, fields) => {
			if (error) {
				console.log(error);
				reject({"message":"Error"});
				return;
			}
			
			console.log('INSERTED NEW ROUND ( USERID -', userID, ')');
			resolve({"message":"Successfully Inserted New Round"});
		});
	});
}

module.exports = InsertRound;