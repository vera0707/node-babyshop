const redis = require('redis');
const client = redis.createClient(2333,'127.0.0.1');



client.auth('123456');
client.on('ready',()=>{
    console.log('redis ready....');
});

client.on('error',err=>{
    console.log('redis error : ' + err);
});

module.exports = client;
