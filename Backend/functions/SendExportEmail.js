const nodemailer = require('nodemailer');
const XLSX = require('xlsx');
require('dotenv').config();

const GetRoundsDateRange = require('../database/GetRoundsDateRange');

const SendExportEmail = async ({email, rows}) => {

	const { status, earliest, latest } = await GetRoundsDateRange();

	const columnHeaders = {
		time: 'Time',
		name: 'Worker Name',
		startTime: 'Round Start',
		endTime: 'Time Completed',
		activities: 'Activities',
		gameRoom: 'Game Room',
		secondFloor: '2nd Floor',
		collabRooms: 'Colab Rooms',
		prayerRoom: 'Prayer Room',
		mediaRoom: 'Media Room',
		commuter: 'Commuter',
		commons: 'Commons',
		hive: 'Hive',
		breakout: 'Breakout',
		greatRoom: 'Great Room',
		mail: 'Mail',
		hallways: 'Hallways',
		other: 'Other',
		total: 'Total',
	};

	const workbook = XLSX.utils.book_new();

	// Loop over each row and put each row with the same date in the same worksheet
	// Name of sheet should be date

	while(rows.length > 0){
		let currentDate = rows[0].date;

		// Remove first from rows and add to data
		let data = [rows.shift()];

		while(rows.length > 0 && rows[0].date == currentDate){
			// Remove first from rows and add to data
			data.push(rows.shift());
		}

		const newData = data.map((row) => {
			return {
				[columnHeaders.time]: row.time,
				[columnHeaders.name]: row.name,
				[columnHeaders.startTime]: row.startTime,
				[columnHeaders.endTime]: row.endTime,
				[columnHeaders.activities]: row.activities,
				[columnHeaders.gameRoom]: row.gameRoom,
				[columnHeaders.secondFloor]: row.secondFloor,
				[columnHeaders.collabRooms]: row.collabRooms,
				[columnHeaders.prayerRoom]: row.prayerRoom,
				[columnHeaders.mediaRoom]: row.mediaRoom,
				[columnHeaders.commuter]: row.commuter,
				[columnHeaders.commons]: row.commons,
				[columnHeaders.hive]: row.hive,
				[columnHeaders.breakout]: row.breakout,
				[columnHeaders.greatRoom]: row.greatRoom,
				[columnHeaders.mail]: row.mail,
				[columnHeaders.hallways]: row.hallways,
				[columnHeaders.other]: row.other,
				[columnHeaders.total]: row.total,
			};
		});

		const worksheet = XLSX.utils.json_to_sheet(newData);
		XLSX.utils.book_append_sheet(workbook, worksheet, currentDate);
	}
	
	const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

	const transporter = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: process.env.EMAIL_PORT,
		secureConnection: false,
		tls: {
			ciphers:'SSLv3'
		},
		auth: {
			user: process.env.EMAIL_USERNAME,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	const mailOptions = {
		from: process.env.EMAIL_USERNAME,
		to: email,
		subject: `AFSC Student Worker Rounds Data (${earliest} to ${latest})`,
		text: 'Please find the Excel sheet attached.',
		attachments: [
			{
				filename: 'data.xlsx',
				content: excelBuffer,
			},
		],
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error('Error sending email:', error);
			return {
				status: false,
				message: "Error"
			}
		} else {
			console.log('EMAIL SENT:', info.response);
			return {
				status: true,
				message: "Email sent"
			}
		}
	});

}

module.exports = SendExportEmail;