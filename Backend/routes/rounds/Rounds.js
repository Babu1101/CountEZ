const express = require('express');
const router = express.Router();
const cors = require('cors');

router.use(cors());
router.use(express.json());

const GetTotal = require("../../functions/GetTotal.js")
const InsertRound = require("../../functions/InsertRound.js");

router.get("/", async (req, res) => {
	try {
		const response = await GetTotal();
		res.status(200).json(response);

	} catch (error) {
		res.status(500).json(error);
	}
});

router.post("/", async (req, res) => {
	try {
		const { userID, data, startTime, endTime, date } = req.body;

		const response = await InsertRound({ userID, data, startTime, endTime, date });

		res.status(200).json(response);
		
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;