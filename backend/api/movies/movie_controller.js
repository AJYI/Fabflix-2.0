const movie_service = require('./movie_service')

module.exports.create_movie_entry = async(req, res) => {
    let response = {}
    try{
        const response_from_service = await movie_service.create_movie_entry(req.body);
        response.status = 200;
        response.message = 'New movie has been inputted.';
        response.body = response_from_service;
    } catch (error) {
        console.log("Error in 'movie_controller', create_movie_entry : ", error);
        response.status = 400;
        response.message = error.message;
        response.body = {}
    }
    return res.status(response.status).send(response);
}

module.exports.get_all_movies = async(req, res) => {
    let response = {}
    try{
        const response_from_service = await movie_service.get_all_movies();
        response.status = 200;
        response.message = "Got all movies.";
        response.body = response_from_service;
    } catch (error) {
        console.log("Error in 'movie_controller', get_all_movies : ", error);
        response.status = 400;
        response.message = error.message;
        response.body = {}
    }
    return res.status(response.status).send(response);
}

module.exports.get_single_movie = async(req, res) => {
    let response = {}
    try{
        console.log(req.params)
        const response_from_service = await movie_service.get_single_movie(req.params);
        response.status = 200;
        response.message = "Got a singular movie.";
        response.body = response_from_service;
    } catch (error) {
        console.log("Error in 'movie_controller', get_single_movie : ", error);
        response.status = 400;
        response.message = error.message;
        response.body = {}
    }
    return res.status(response.status).send(response);
}