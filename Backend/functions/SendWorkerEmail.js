const nodemailer = require('nodemailer');
require('dotenv').config();

const SendWorkerEmail = async (body, generatedPassword) => {

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
		to: body.email,
		subject: `CountEZ Account Creation`,
		text: `Your account has been created in CountEZ.\n\nEmail: ${body.email}\nPassword: ${generatedPassword}\n\nPlease log in and change your generated password at your earliest convenience.`
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

module.exports = SendWorkerEmail;