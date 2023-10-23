const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const db = require("./db");

app.use(cors());
app.use(express.json());

app.get("/status", async (req, res) => {
	console.log("Status Checked...");
	res.status(200).json("Running");
});

app.listen(PORT, () => {
	console.log(`Starting HTTP server on port ${PORT}...`);
});