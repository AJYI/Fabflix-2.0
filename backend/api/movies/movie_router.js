const express = require('express');
const router = express.Router();
const movie_controller = require('./movie_controller');

router.post('/create-movie-entry', movie_controller.create_movie_entry);

module.exports = router;