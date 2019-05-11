const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:123456@127.0.1:27017/admin?authSource=admin');

const db = mongoose.connection;
db.on('connected',()=>{
   console.log('mongodb is connected.....');
});

db.on('error',err=>{
    console.log('mongodb is err :' + err);
});

db.on('disconnected',()=>{
    console.log('mongodb is disconnected.....');
});


module.exports = mongoose;