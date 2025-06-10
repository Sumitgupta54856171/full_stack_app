const redis = require('redis');
const client = new redis.createClient({
   socket: {
        host: 'localhost',
        port: '6379'
    }
});
client.connect()
    .then(() => {
        console.log('Connected to Redis');
    })
    .catch((error) => {
        console.error('Error connecting to Redis:', error);
    });
module.exports = client;