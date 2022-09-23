const sequelize = require('../../database/sequelize/connection');
const db = require('../../database/sequelize/database')

module.exports.browse_genres = async() => {
    try {
        const genres = await sequelize.query("select name, genreId, count(genres.name) as count from genres, genres_in_movies where genres.id = genres_in_movies.genreId group by genres.name order by genres.name ASC", { type: sequelize.QueryTypes.SELECT });
        return genres;
    } catch (error) {
        console.log('Something went wrong within "genres service": browse_genres', error);
        throw new Error(error);
    }
}

module.exports.get_by_browse_relevance = async(request_params, limit = 10, page = 1) => {
    try {
        const genre_id = request_params.genre_id;
        const sort_option = request_params.sort_option;
        const sorting_options = {
            "1" : "`title` DESC",
            "2" : "`title` ASC",
            "3" : "`year` DESC",
            "4" : "`year` ASC",
            "5" : "`rating.rating` DESC",
            "6" : "`rating.rating` ASC",
            "7" : "`rating.numVotes` DESC",
            "8" : "`rating.numVotes` ASC",
        }

        const movies = await db.movies.findAll({
            include: [
                {
                    model: db.genres,
                    attributes: [],
                    where: {
                        id: genre_id
                    }
                },
                {
                    model: db.ratings,
                    attributes: ['rating', 'numVotes']
                }
            ],
            order: [sequelize.literal(sorting_options[sort_option])],
            subQuery: false,
            limit: limit,
            offset: (page-1) * limit
        });
        return movies;
    } catch (error) {
        console.log('Something went wrong within "genres service": browse_genres', error);
        throw new Error(error);
    }
}