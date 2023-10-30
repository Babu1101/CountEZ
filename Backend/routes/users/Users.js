const express = require('express');
const router = express.Router();
const cors = require('cors');

router.use(cors());
router.use(express.json());

const LoginRoutes = require("./Login.js");
router.use("/login", LoginRoutes);

module.exports = router;