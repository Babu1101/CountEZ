const express = require('express');
const router = express.Router();
const cors = require('cors');

router.use(cors());
router.use(express.json());

const InsertRound = require("../../functions/InsertRound.js");

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