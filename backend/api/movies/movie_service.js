const movies = require('../../database/sequelize/models/Movies')

module.exports.create_movie_entry = async(request_body) => {
    try {
        let movie_entry = await movies.create({...request_body})
        return movie_entry;
    } catch (error) {
        console.log('Something went wrong within "movie service": create_movie', error);
        throw new Error(error);
    }
}