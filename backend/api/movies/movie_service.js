const sequelize = require('../../database/sequelize/connection')
const genres_in_movies = require('../../database/sequelize/models/genres_in_movies')
const stars_in_movies = require('../../database/sequelize/models/stars_in_movies')
const genres = require('../../database/sequelize/models/genres')
const stars = require('../../database/sequelize/models/stars')
const movies = require('../../database/sequelize/models/movies')
const ratings = require('../../database/sequelize/models/ratings')


module.exports.create_movie_entry = async(request_body) => {
    try {
        const movie_entry = await movies.create({...request_body})
        return movie_entry;
    } catch (error) {
        console.log('Something went wrong within "movie service": create_movie', error);
        throw new Error(error);
    }
}

module.exports.get_all_movies = async() => {
    try {

        const movie_entry = await movies.findAll({
            
            include: [
                {
                    model: ratings,
                    attributes: ['rating', 'numVotes']
                }, 
                {
                    model: genres,
                    required: true,
                    through: {
                        attributes: []
                    }
                },
                {
                    model: stars,
                    through: {
                        attributes: []
                    }
                },
            ],
            order: [[{model: ratings}, 'rating', 'DESC']],
            limit: 10
        });

        return movie_entry;
    } catch (error) {
        console.log('Something went wrong within "movie service": get_all_movies', error);
        throw new Error(error);
    }
}

module.exports.get_single_movie = async(request_body) => {
    try {
        const movie_id = request_body.movie_id
        console.log(movie_id)
        const movie_entry = await movies.findByPk(movie_id ,{
            include: [
                {
                    model: ratings,
                    attributes: ['rating', 'numVotes']
                }, 
                {
                    model: genres,
                    through: {
                        attributes: []
                    }
                },
                {
                    model: stars,
                    required: true,
                    attributes: [
                        'id',
                        'name',
                        'birthYear',
                        [sequelize.literal('(select count(*) from stars_in_movies where stars.id = stars_in_movies.starId group by stars.name)'), 'count'],
                    ],
                    through: {
                        attributes: []
                    },
                },
            ],
            order: [[{model: genres}, 'id', 'ASC'], sequelize.literal("`stars.count` DESC")],
        });

        return movie_entry;
    } catch (error) {
        console.log('Something went wrong within "movie service": get_single_movie', error);
        throw new Error(error);
    }
}