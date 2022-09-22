const stars_service = require('./stars_service');

module.exports.get_single_star = async (req,res) => {
    let response = {}
    try{
        const response_from_service = await stars_service.get_single_star(req.params);
        response.status = 200;
        response.message = `Got the star with the ID of '${req.params.star_id}'.`;
        response.body = response_from_service;
    } catch (error) {
        console.log("Error in 'stars_controller',get_single_star", error);
        response.status = 400;
        response.message = error.message;
        response.body = {}
    }
    return res.status(response.status).send(response);
}