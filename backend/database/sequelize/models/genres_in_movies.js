const Sequelize = require('sequelize');
const sequelize = require('../connection');
const movies = require('./movies');
const genres = require('./genres')

const genres_in_movies = sequelize.define('genres_in_movies', {
    genreId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    movieId: {
        type: Sequelize.STRING(10),
        allowNull: false,
    },
},
{
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

movies.belongsToMany(genres, {through: genres_in_movies});
genres.belongsToMany(movies, {through: genres_in_movies});

module.exports = genres_in_movies;
