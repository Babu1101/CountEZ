const express = require('express');
const router = express.Router();
const cors = require('cors');

router.use(cors());
router.use(express.json());

const GetExportData = require('../../database/GetExportData.js');
const SendExportEmail = require('../../functions/SendExportEmail.js');

router.get("/", async (req, res) => {
	try {
		const { email } = req.query;

		const rows = await GetExportData({email});
		const response = await SendExportEmail({email, rows});

		res.status(200).json(response);

	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;