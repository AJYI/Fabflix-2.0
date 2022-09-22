const Sequelize = require('sequelize');
const sequelize = require('../connection');
const movies = require('./movies');

const ratings = sequelize.define("ratings",{
    movieId: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    rating: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    numVotes: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
}
);
ratings.removeAttribute('id');

module.exports = ratings;