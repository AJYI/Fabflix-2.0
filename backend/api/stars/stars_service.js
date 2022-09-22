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