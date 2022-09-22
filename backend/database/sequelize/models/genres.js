const Sequelize = require('sequelize');
const sequelize = require('../connection')

const genres = sequelize.define("genres",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING(32),
        allowNull: false
    }
}, 
{
    timestamps: false,
    createdAt: false,
    updatedAt: false,
}
);

module.exports = genres;