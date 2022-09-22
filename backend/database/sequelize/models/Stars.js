const Sequelize = require('sequelize');
const sequelize = require('../connection')

const stars = sequelize.define("stars",{
    id: {
        type: Sequelize.STRING(10),
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    birthYear: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
}
);

module.exports = stars;