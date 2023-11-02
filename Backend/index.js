const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const usersRoutes = require('./routes/users/Users');
const roundsRoutes = require('./routes/rounds/Rounds');
const exportRoutes = require('./routes/export/Export');

app.use("/users", usersRoutes);
app.use("/rounds", roundsRoutes);
app.use("/export", exportRoutes);

app.get("/status", async (req, res) => {
	console.log("Status Checked...");
	res.status(200).json("Running");
});

app.listen(PORT, () => {
	console.log(`Starting HTTP server on port ${PORT}...`);
});