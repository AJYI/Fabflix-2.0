const stars = require('../../database/sequelize/models/stars')
const movies = require('../../database/sequelize/models/movies')

module.exports.get_single_star = async() => {
    try {
        const movie_entry = await movies.create({...request_body})
        return movie_entry;
    } catch (error) {
        console.log('Something went wrong within "stars_service": get_single_star', error);
        throw new Error(error);
    }
}