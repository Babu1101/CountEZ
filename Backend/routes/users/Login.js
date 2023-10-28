const express = require('express');
const router = express.Router();
const cors = require('cors');

router.use(cors());
router.use(express.json());

const Login = require("../../functions/Login.js");

router.post("/", async (req, res) => {
	try {
		const { email, password } = req.body;

		const response = await Login({email, password});

		res.status(200).json(response);

	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;