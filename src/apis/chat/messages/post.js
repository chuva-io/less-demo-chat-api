// Import shared `models` module.
const { Message } = require('models');

// Here we are only exporting a `process` function that will contain the logic for handling the specific HTTP method
module.exports = {
    // POST /messages request handler function
    process: async (request, response) => {
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
        }
};