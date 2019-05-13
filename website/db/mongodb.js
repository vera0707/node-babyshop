const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:123456@127.0.1:27017/admin?authSource=admin');

const mongodb = mongoose.connection;
mongodb.on('connected',()=>{
   console.log('mongodb is connected.....');
});

mongodb.on('error', err=>{
    console.log('mongodb is err :' + err);
});

mongodb.on('disconnected',()=>{
    console.log('mongodb is disconnected.....');
});

module.exports = mongoose;