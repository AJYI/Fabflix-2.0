const express = require('express');
const router = express.Router();
const genres_controller = require('./genres/genres_controller');
const movie_controller = require('./movies/movie_controller');
const star_controller = require('./stars/stars_controller');

// Genres Routes
router.get('/genres/browse-genres', genres_controller.browse_genres);
router.get('/genres/get-by-browse-relevance/:genre_id/:sort_option', genres_controller.get_by_browse_relevance);

// Movies Routes
router.get('/movies/get-all-movies', movie_controller.get_all_movies); // won't be used
router.get('/movies/get-movie/:movie_id', movie_controller.get_single_movie);
router.post('/movies/create-movie-entry', movie_controller.create_movie_entry);

// Star Routes
router.get('/stars/get-single-star/:star_id', star_controller.get_single_star);


module.exports = router;