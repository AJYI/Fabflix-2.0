const sequelize = require('../../database/sequelize/connection')
const db = require('../../database/sequelize/database')

module.exports.create_movie_entry = async(request_body) => {
    try {
        const movie_entry = await db.movies.create({...request_body})
        return movie_entry;
    } catch (error) {
        console.log('Something went wrong within "movie service": create_movie', error);
        throw new Error(error);
    }
}

module.exports.get_all_movies = async() => {
    try {
        const movie_entry = await db.movies.findAll({
            
            include: [
                {
                    model: db.ratings,
                    attributes: ['rating', 'numVotes']
                }, 
                {
                    model: db.genres,
                    required: true,
                    through: {
                        attributes: []
                    }
                },
                {
                    model: db.stars,
                    through: {
                        attributes: []
                    }
                },
            ],
            order: [[{model: db.ratings}, 'rating', 'DESC']],
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
        const movie_entry = await db.movies.findByPk(movie_id ,{
            include: [
                {
                    model: db.ratings,
                    attributes: ['rating', 'numVotes']
                }, 
                {
                    model: db.genres,
                    through: {
                        attributes: []
                    }
                },
                {
                    model: db.stars,
                    required: true,
                    attributes: [
                        'id',
                        'name',
                        'birthYear',
                        [sequelize.literal('(select count(*) from stars_in_movies where stars.id = stars_in_movies.starId group by stars.name)'), 'movies_played'],
                    ],
                    through: {
                        attributes: []
                    },
                },
            ],
            order: [[{model: db.genres}, 'id', 'ASC'], sequelize.literal("`stars.movies_played` DESC")],
        });

        return movie_entry;
    } catch (error) {
        console.log('Something went wrong within "movie service": get_single_movie', error);
        throw new Error(error);
    }
}