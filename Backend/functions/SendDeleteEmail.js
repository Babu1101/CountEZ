const nodemailer = require('nodemailer');
require('dotenv').config();

const SendDeleteEmail = async (email) => {

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
		subject: `CountEZ Account Deletion`,
		text: `Your account has been deleted in CountEZ.\n\nEmail: ${email}\n\nYou will no longer have access to CountEZ.\nPlease contact the lead worker if this was a mistake.`
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

module.exports = SendDeleteEmail;