const express = require('express');
const router = express.Router();
const movie_controller = require('./movie_controller');

router.post('/create-movie-entry', movie_controller.create_movie_entry);
router.get('/get-all-movies', movie_controller.get_all_movies);

module.exports = router;