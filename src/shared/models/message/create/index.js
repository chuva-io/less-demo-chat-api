// Import `topics` from Less so we can publish to the
//   `message_created` topic when a topic is created.
const { topics } = require('@chuva.io/less')
const schema = require('./schema');

module.exports = async ({ name, email, message}) => {
    // Validate the request and return in case of error.
    const { error } = schema.validate({ name, email, message});
    if (error) {
      return;
    }

    // Create the message. 
    // (This could be a database create operation, etc..)
    const new_message = {
        name,
        email,
        message,
    };
    
    // Publish the new message to your topic.
    // (This could result from a database trigger.)
    await topics.message_created.publish(new_message);

    // Return the new message.
    return new_message;
};