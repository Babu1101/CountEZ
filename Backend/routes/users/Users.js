const express = require('express');
const router = express.Router();
const cors = require('cors');

router.use(cors());
router.use(express.json());

const LoginRoutes = require("./Login.js");
router.use("/login", LoginRoutes);

const GetWorkers = require("../../database/GetWorkers.js");
const InsertWorker = require("../../database/InsertWorker.js");

const SendWorkerEmail = require("../../functions/SendWorkerEmail.js");
const GeneratePassword = require('../../functions/GeneratePassword.js');
const SendForgotPassword = require('../../database/SendForgotPassword.js');

const UpdatePassword = require('../../database/UpdatePassword.js');

router.get("/", async (req, res) => {
	try {
		const response = await GetWorkers();
		res.status(200).json(response);

	} catch (error) {
		res.status(500).json(error);
	}
});

router.post("/", async (req, res) => {
	try {
		const body = req.body;

		// check if a worker exists with this email already

		const generatedPassword = await GeneratePassword();
		await InsertWorker(body, generatedPassword);
		const response = await SendWorkerEmail(body, generatedPassword);
		
		res.status(200).json(response);

	} catch (error) {
		res.status(500).json(error);
	}
});

router.put("/", async (req, res) => {
	try {

		res.status(200).json(response);

	} catch (error) {
		res.status(500).json(error);
	}
});

router.delete("/", async (req, res) => {
	try {

		res.status(200).json(response);

	} catch (error) {
		res.status(500).json(error);
	}
});

router.post("/Forgot", async (req, res) => {
	try {
		const {email} = req.body;	
		
		const generatedPassword = await GeneratePassword();
		
		const UpdatePasswordEmail = await UpdatePassword(email, generatedPassword);
		const SendForgotPasswordEmail = await SendForgotPassword (email,generatedPassword);
	
		res.status(200).json(response);


		

	} catch (error) {
		if(error.message == "This user email doesn't exist."){
			res.status(404).json(error);
			return
		}
		res.status(500).json(error);
		
	}
});

module.exports = router;