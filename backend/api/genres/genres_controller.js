const genres_service = require('./genres_service')

module.exports.browse_genres = async(req, res) => {
    let response = {}
    try{
        const response_from_service = await genres_service.browse_genres();
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

module.exports.get_by_browse_relevance = async(req, res) => {
    let response = {}
    try{
        const response_from_service = await genres_service.get_by_browse_relevance(req.params);
        response.status = 200;
        response.message = `Returned the results associated with ${req.params.browse_id}`;
        response.body = response_from_service;
    } catch (error) {
        console.log("Error in 'genres_controller', get_by_browse : ", error);
        response.status = 400;
        response.message = error.message;
        response.body = {}
    }
    return res.status(response.status).send(response);
}