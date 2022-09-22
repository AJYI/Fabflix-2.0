const express = require('express');
const router = express.Router();
const star_controller = require('./stars_controller');

router.get('/get-single-star/:star_id', star_controller.get_single_star);

module.exports = router;