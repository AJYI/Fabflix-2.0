const genres_in_movies = require('./models/genres_in_movies');
const genres = require('./models/genres');
const movies = require('./models/movies');
const ratings = require('./models/ratings');
const stars_in_movies = require('./models/stars_in_movies');
const stars = require('./models/stars');


const database_object = {}

// M:N Associations (Junction Tables)
movies.belongsToMany(genres, {through: genres_in_movies});
genres.belongsToMany(movies, {through: genres_in_movies});

movies.belongsToMany(stars, {through: stars_in_movies, foreignKey: 'movieId'});
stars.belongsToMany(movies, {through: stars_in_movies, foreignKey: 'starId'});

// Regular associations
movies.hasOne(ratings,{foreignKey: 'movieId'});
ratings.belongsTo(movies);

// Adding to the obj
database_object.genres = genres;
database_object.movies = movies;
database_object.ratings = ratings;
database_object.stars = stars;

module.exports = database_object;
