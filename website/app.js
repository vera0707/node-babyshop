const express = require("express");
const open = require('open');
const router =  require('./router/index');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const port = 3500;


const app = express();
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    name: 'session_id',
    resave: false,
    saveUninitialized: true,
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/static',express.static(__dirname + '/views/static'));
app.engine('art',require('express-art-template'));
app.set('views',__dirname + '/views');
app.use('/',router);
app.listen(port,()=>{
    open('http://localhost:'+port);
    console.log(`The server is connecting on port ${port}......`);
});