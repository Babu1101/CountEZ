const express = require('express');
const router = express.Router();
const cors = require('cors');

router.use(cors());
router.use(express.json());

const GetWorkers = require("../../database/GetWorkers.js");
const InsertWorker = require("../../database/InsertWorker.js");
const EditWorker = require("../../database/EditWorker.js");
const DeleteWorker = require("../../database/DeleteWorker.js");

const GetWorkerEmail = require('../../database/GetWorkerEmail.js');
const CheckWorkerExists = require('../../database/CheckWorkerExists.js');

const SendWorkerEmail = require("../../functions/SendWorkerEmail.js");
const GeneratePassword = require('../../functions/GeneratePassword.js');
const SendDeleteEmail = require("../../functions/SendDeleteEmail.js");

const Login = require("../../database/Login.js");

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

		await CheckWorkerExists(body);

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
		const body = req.body;

		const response = await EditWorker(body);
		res.status(200).json(response);

	} catch (error) {
		res.status(500).json(error);
	}
});

router.delete("/", async (req, res) => {
	try {
		const body = req.body;

		const email = await GetWorkerEmail(body);
		await DeleteWorker(body, email);
		const response = await SendDeleteEmail(email);
		res.status(200).json(response);

	} catch (error) {
		res.status(500).json(error);
	}
});

router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		const response = await Login({email, password});

		res.status(200).json(response);

	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;