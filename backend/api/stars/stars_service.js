const Sequelize = require('sequelize')
const sequelize = require('../../database/sequelize/connection')
const db = require('../../database/sequelize/database')

module.exports.get_single_star = async(request_params) => {
    try {
        const star_id = request_params.star_id
        const star_entry = await db.stars.findByPk(star_id ,{
            include: [
                {
                    model: db.movies,
                    attributes: [
                        'id', 
                        'title',
                        [sequelize.literal('(select rating from ratings where ratings.MovieId = movies.id)'), 'rating']
                    ],
                    through: {
                        attributes: []
                    }
                }
            ],
            order: [sequelize.literal("`movies.rating` DESC")],
        });
        return star_entry;
    } catch (error) {
        console.log('Something went wrong within "stars_service": get_single_star', error);
        throw new Error(error);
    }
}

module.exports.browse_cast_letter_list = async() => {
    const result = {}
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'.toUpperCase()];
    alphabet.push("Other")
    result.choices = alphabet
    return result
}

module.exports.browse_cast_by_first_letter = async(request_params, limit = 10, page = 1) => {
    try {
        const first_letter = request_params.first_letter
        const like_operation = first_letter === 'other' ? "name NOT RLIKE '^[A-Z]'" : `name LIKE '${first_letter}%'`
        const stars = await sequelize.query(`select id, name, birthYear, count(id) as moviesStarredIn from stars, 
                                            stars_in_movies where stars.id = stars_in_movies.starId and ${like_operation} 
                                            group by name limit ${limit} offset ${(page-1) * limit}`
                                            ,{ type: sequelize.QueryTypes.SELECT });
        return stars;
    } catch (error) {
        console.log('Something went wrong within "stars_service": browse_cast_by_first_letter', error);
        throw new Error(error);
    }
}