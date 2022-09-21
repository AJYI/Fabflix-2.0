const Sequelize = require('sequelize');
const sequelize = require('../connection')

module.exports = sequelize.define("stars",{
    id: {
        type: Sequelize.STRING(10),
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
}
);