const express = require("express");
const { createUser, getUser } = require("../controllers/userController");

const router = express.Router();

// create || POST
router.route("/dashboard").post(createUser);
router.route("/dashboard/get").post(getUser);

module.exports = router;
