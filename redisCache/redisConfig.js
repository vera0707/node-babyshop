const redis = require('redis');
const client = redis.createClient(5300,'127.0.0.1');

client.auth(123456);
client.on('ready',()=>{
    console.log('redis is ready...');
});
client.on('error',err=>{
    console.log('redis error : ' + err);
});

module.exports = client;