const Sequelize = require('sequelize');
const sequelize = require('../connection');
const movies = require('./movies');
const stars = require('./stars')

const stars_in_movies = sequelize.define('stars_in_movies', {
    starId: {
        type: Sequelize.STRING(10),
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

movies.belongsToMany(stars, {through: stars_in_movies, foreignKey: 'movieId'});
stars.belongsToMany(movies, {through: stars_in_movies, foreignKey: 'starId'});

module.exports = stars_in_movies;