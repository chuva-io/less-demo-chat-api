const faker = require('@faker-js/faker');
const { Message } = require('models');

const { CHAT_BOT_NAME } = process.env;

// Export `process` function which is called based on CRON schedule.
// Here we just create a message using our shared `Message` model.
exports.process = async () => await Message.create({
    name: CHAT_BOT_NAME,
    message: faker.hacker.phrase() // random hacker message
});