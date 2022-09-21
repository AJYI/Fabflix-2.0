const movie_service = require('./movie_service')

module.exports.create_movie_entry = async(req, res) => {
    let response = {}
    try{
        const response_from_service = await movie_service.create_movie_entry(req.body);
        response.status = 200;
        response.message = 'New movie has been inputted.';
        response.body = response_from_service[0];
    } catch (error) {
        console.log("Error in 'movie_controller', create_movie_entry : ", error);
        response.status = 400;
        response.message = error.message;
        response.body = {}
    }
    return res.status(response.status).send(response);
}