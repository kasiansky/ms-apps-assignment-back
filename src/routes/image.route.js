const express = require("express");
const dataController = require("../controllers/imageController");

const router = express.Router();

// Define routes
router.get("/", dataController.getData);

module.exports = router;
