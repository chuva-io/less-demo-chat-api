const Joi = require('joi');

const schema = Joi.object({
    email: Joi.string().email(),
    name: Joi.string().max(30).required(),
    message: Joi.string().max(255).required()
});

module.exports = schema;