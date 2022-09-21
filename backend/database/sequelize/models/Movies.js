const Sequelize = require('sequelize');
const sequelize = require('../connection')

module.exports = sequelize.define("movies",{
    id: {
        type: Sequelize.STRING(10),
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    directory: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
}
);