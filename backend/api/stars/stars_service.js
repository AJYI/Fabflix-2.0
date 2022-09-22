const sequelize = require('../../database/sequelize/connection')
const db = require('../../database/sequelize/database')

module.exports.get_single_star = async(request_params) => {
    try {
        const star_id = request_params.star_id
        const star_entry = await db.stars.findByPk(star_id ,{
        });
        return star_entry;
    } catch (error) {
        console.log('Something went wrong within "stars_service": get_single_star', error);
        throw new Error(error);
    }
}