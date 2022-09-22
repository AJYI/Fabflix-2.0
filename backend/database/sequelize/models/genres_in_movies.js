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

module.exports = genres_in_movies;
