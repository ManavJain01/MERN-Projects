// Importing local files
const { hi, testing } = require('../controllers/practice')

// Accessing Express and MongoDB Packages
const express = require('express')
const router = express.Router();

router.route("/").get(hi);
router.route("/testing").get(testing);


module.exports = router;