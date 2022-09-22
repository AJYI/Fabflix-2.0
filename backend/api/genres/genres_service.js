const sequelize = require('../../database/sequelize/connection')
const db = require('../../database/sequelize/database')

module.exports.get_all_genres = async(request_body) => {
    try {
        const genres = await db.genres.findAll({
        });
        return genres;
    } catch (error) {
        console.log('Something went wrong within "genres service": get_all_genres', error);
        throw new Error(error);
    }
}