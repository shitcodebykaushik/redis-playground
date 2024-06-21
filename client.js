const {Redis } = require ('ioredis');

const client = new Redis(); // By default this will hit to the port 6363

 module.exports = client;