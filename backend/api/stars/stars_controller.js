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

module.exports.browse_cast_letter_list = async (req,res) => {
    let response = {}
    response.status = 200;
    response.message = `Got the browsing options'.`;
    response.body = await stars_service.browse_cast_letter_list();
    return res.status(response.status).send(response);
}

module.exports.browse_cast_by_first_letter = async (req,res) => {
    let response = {}
    try{
        const response_from_service = await stars_service.browse_cast_by_first_letter(req.params);
        response.status = 200;
        response.message = `Got the stars with the first character of '${req.params.first_letter}'.`;
        response.body = response_from_service;
    } catch (error) {
        console.log("Error in 'stars_controller',browse_cast_by_first_letter", error);
        response.status = 400;
        response.message = error.message;
        response.body = {}
    }
    return res.status(response.status).send(response);
}