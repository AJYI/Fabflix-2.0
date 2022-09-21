const movies = require('../../database/sequelize/models/Movies')
const ratings = require('../../database/sequelize/models/Ratings')
const sequelize = require('../../database/sequelize/connection')

module.exports.create_movie_entry = async(request_body) => {
    try {
        let movie_entry = await movies.create({...request_body})
        return movie_entry;
    } catch (error) {
        console.log('Something went wrong within "movie service": create_movie', error);
        throw new Error(error);
    }
}

module.exports.get_all_movies = async() => {
    try {
        let movie_entry = await movies.findAll({
            limit: 10,
            include: {model: ratings},
            order: [[{model: ratings}, 'rating', 'DESC']]
        });
        return movie_entry;
    } catch (error) {
        console.log('Something went wrong within "movie service": get_all_movies', error);
        throw new Error(error);
    }
}