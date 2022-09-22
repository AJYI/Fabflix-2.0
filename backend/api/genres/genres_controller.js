const genres_service = require('./genres_service')

module.exports.get_all_genres = async(req, res) => {
    let response = {}
    try{
        const response_from_service = await genres_service.get_all_genres(req.body);
        response.status = 200;
        response.message = 'All genres have been retrieved.';
        response.body = response_from_service;
    } catch (error) {
        console.log("Error in 'genres_controller', get_all_genres : ", error);
        response.status = 400;
        response.message = error.message;
        response.body = {}
    }
    return res.status(response.status).send(response);
}