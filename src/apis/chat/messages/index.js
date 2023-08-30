const { route } = require('@chuva.io/less');

// Import shared `models` module.
const { Message } = require('models');

// Export an object with a `route` for each HTTP verb.
// Here we are only exporting a `POST` route with no middleware.
module.exports = {

    // POST /messages request handler function
    post: route(async (request, response) => {
            // Parse the JSON request (this could also be done through middleware).
            const body = JSON.parse(request.body);

            // Create the message.
            const message = await Message.create(body);

            // Bad request if it fails
            if (!message) {
                response.statusCode = 400;
                response.body = JSON.stringify({
                    message: 'Bad request'
                });
                return response;
            };

            // Created successfully
            response.statusCode = 201;
            response.body = JSON.stringify({ message });
            
            return response;
        },
        [] // request middleware
    )

};